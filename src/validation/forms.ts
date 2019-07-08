import { InputPropsObject } from "src/hooks/useForm/useForm";
import { EntryType } from "src/types";

function flagMissingFields(fields: any[]) {
  return fields
    .map(field => {
      if (field!.value.length <= 0) {
        return { name: field!.name, error: "is required" };
      }
      return null;
    })
    .filter(error => error !== null);
}

function flagNonNumericFields(fields: any[]) {
  return fields
    .map(field => {
      if (isNaN(field!.value)) {
        return { name: field!.name, error: "should be a number" };
      }
      return null;
    })
    .filter(error => error !== null);
}

function mergeErrors(...errorLists: any[]) {
  const mergedObj: any = {};
  const errorObjs = errorLists.reduce((acc, curr) => acc.concat(curr), []);
  errorObjs.forEach((obj: any) => {
    if (!mergedObj[obj.name]) {
      mergedObj[obj.name] = [];
    }
    mergedObj[obj.name].push(obj.error);
  });
  return mergedObj;
}

export default class FormValidator {
  static validateOrganisationOverview(inputs: InputPropsObject<EntryType>) {
    const errors = mergeErrors(
      flagMissingFields([
        inputs.organisationName,
        inputs.sector,
        inputs.foundationYear,
        inputs.description
      ]),
      flagNonNumericFields([inputs.foundationYear])
    );
    if (Object.keys(errors).length <= 0) {
      return null;
    }
    return errors;
  }

  static validateOrganisationDetails(
    inputs: InputPropsObject<EntryType>
  ): boolean {
    return true;
  }

  static validateOrganisationMedia(
    inputs: InputPropsObject<EntryType>
  ): boolean {
    return true;
  }

  static validateOrganisationAddress(
    inputs: InputPropsObject<EntryType>
  ): boolean {
    return true;
  }

  static validateContactPerson(inputs: InputPropsObject<EntryType>): boolean {
    return true;
  }

  static validateWhatYouNeed(inputs: InputPropsObject<EntryType>): boolean {
    return true;
  }

  static validateFinalDetails(inputs: InputPropsObject<EntryType>): boolean {
    return true;
  }
}
