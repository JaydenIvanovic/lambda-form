import { ChangeEvent, useState } from "react";

interface State {
  [key: string]: any;
}

interface InputProp {
  name: string;
  value: string;
  id: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

export type InputPropsObject<S> = { [key in keyof S]?: InputProp };

function useForm<S extends State>(
  initialValues: S
): [S, any, InputPropsObject<S>, any] {
  const [values, setValues] = useState<S>(initialValues);
  const [errors, setErrors] = useState<{ [key in keyof S]: string }>(
    createInitialErrorValues(initialValues)
  );

  const inputs: InputPropsObject<S> = {};

  (Object.keys(values) as Array<keyof InputPropsObject<S>>).forEach(key => {
    inputs[key] = {
      name: key.toString(),
      value: values[key],
      id: key.toString(),
      onChange: (
        e: ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ) => setValues({ ...values, [key]: e.target.value })
    };
  });

  return [values, errors, inputs, setErrors];
}

function createInitialErrorValues(initialValues: any) {
  const initialErrorVals = {
    ...initialValues
  };
  Object.keys(initialValues).forEach(key => {
    initialErrorVals[key] = "";
  });
  return initialErrorVals;
}

export default useForm;
