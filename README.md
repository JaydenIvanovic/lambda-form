# Lambda Form

This is a test app that submits a form to a DynamoDB instance using AWS-Lambda via Gateway.

It is served out of an AWS S3 bucket

## OPS

App currently hosted at: http://lambda-form-dev-websitebucket-iiaiww8c3g6k.s3-website-ap-southeast-2.amazonaws.com/

The app uses the serverless npm package to manae resources in AWS.

```shell
npm install -g serverless
```

Make changes to the aws setup by updating `serverless.yml` and pushing the changes to AWS using:

`serverless deploy --verbose`

Test the api with cURL:

```shell
curl --request GET "https://njyblx6z55.execute-api.ap-southeast-2.amazonaws.com/dev/entries"

curl --data '{"title": "Here is an application"}' --request PUT "https://njyblx6z55.execute-api.ap-southeast-2.amazonaws.com/dev/entry/1"

```

Deploy new versions of the client by building and pushing to S3:

```shell
npm run build
```

Then upload static website assets:

```shell
aws-vault exec devopsgirls -- aws s3 sync build/ s3://lambda-form-dev-websitebucket-iiaiww8c3g6k
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## TODO

- [ ] Remove hardcoded config (api endpoint, s3 bucket etc)
- [ ] Add auth handling to the endpoint
- [ ] Flesh out the form and add user feedback for submissions
- [ ] Add a page to view submissions

### ...maybe..?

- [ ] Add a slack notification for new successful applications

## Once it's looking good

- [ ] Recreated all the resources in the Platform acc
- [ ] Add a Route53 record or something so it's hosted on the 99designs domain instead
