# Zurich Technical Assignment

![version](https://img.shields.io/badge/version-1.0.27-blue)
[![Run API Unit Test](https://github.com/avj2352/zurich-apac-tech-assignment/actions/workflows/api-test.yml/badge.svg)](https://github.com/avj2352/zurich-apac-tech-assignment/actions/workflows/api-test.yml)
[![Run UI Unit Test](https://github.com/avj2352/zurich-apac-tech-assignment/actions/workflows/ui-test.yml/badge.svg)](https://github.com/avj2352/zurich-apac-tech-assignment/actions/workflows/ui-test.yml)


![Typescript logo](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)![Mongo DB Logo](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![ReactLogo](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![Swagger Logo](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)![Nest JS Logo](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)![AWS Logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

- [Demo Website Link (AWS Cloudfront)](https://d11ormolj9shwt.cloudfront.net/#/)

![Link logo](./design/logo.png)


This project aims in creating a Web Application to meet the requirements of the UI technical assignment. **Built entirely with Typescript !!**

# TLDR;


# Technical Assignments (with description)

_With this in mind, Zurich is concerned about:_
-  _React hosting solutions_
	- I decided to use AWS CDK (Cloudformation) to deploy React as a SPA
- _React security, how to secure home page from unauthorized access_
	- Using JWT Session Token (provided by Google OAuth 2.0 Redirect)
- _Proper used of React Redux reducer and actions_
	- Please find all redux store and reducers under `ui/src/commons/state` folder
- _Reusable react components_
	- All components are reusable and can be found in `ui/src/components` folder
- _How to make secure API call from react which require authentication_
	- I used `NestJS` + `Mongo DB` + `Google OAuth 2.0 URI Redirect`



# Important Links

- [Link to the Technical Assignment](https://d11ormolj9shwt.cloudfront.net/#/)
- Links to API Swagger documentation
	- [Users Module](https://zurich-tech-api.herokuapp.com/swagger/api/users/)
	- [Auth Module](https://zurich-tech-api.herokuapp.com/swagger/api/auth/)
	- [Health Module](https://zurich-tech-api.herokuapp.com/swagger/api/health/)
- [Nest JS](https://nestjs.com)
- [Create React App Template](http://create-react-app.dev/)
- [AWS CDK v2 Documentation](https://docs.aws.amazon.com/cdk/api/v2/)
- [Deployment Serverless API with NestJS and AWS CDK](https://medium.com/nextfaze/deploying-serverless-api-with-nestjs-and-aws-cdk-3d41063543e0)
- [Mongo DB Atlas](https://account.mongodb.com)


# Design and Architecture

This Project (app) is buit by leveraging IaaS (Infrastructure as a Service). The framework used is AWS CDK v2 (which is built on top of cloudformation and written in Typescript). 

## Infrastructure

- AWS CDK v2, makes it easy to scaffold on AWS cloud using Level 2 constructs. 
- Using AWS CDK v2, you can easily maintain AWS Cloud resources under a single stack (Cloudformation stack) 
- You can unit test your Tech stack, to make sure the right resources (and right count) are being deployed. which is a huge benefit
	- npm run test
- The CDK CLI offers easy to use build scripts to Create, Scale and Destroy all resources under a particular stack, 
	- cdk bootstrap
	- cdk synth
	- cdk deploy
- If setup correctly, The stacks can be deployed individually or as a whole

## Frontend / UI Layer Architecture and Tech Stack

The Frontend is built using React v18.x and Redux (in Typescript). On the infrastructure, it consists of a S3 bucket hosting React App, connected to cloud front and served on HTTPS.

![UI Architecture](./design//ui-architecture.jpg)

### Technology Stack used

- React v18.x - scaffolding using `create-react-app`
- Typescript 
- Redux - State management library
- React Router Dom - Client side routes
- Axios - Making Async calls to the Server
- PicoCSS - Lightweight UI design library, great for POCs
- Styled Components - Styling component library
- Toastify - Notification library
- Jest - All Unit testing is done using Jest
- Github Actions (UI_test.yml) - Created a Github workflow to show build is passing and show the coverage
- AWS CDK v2 - Hosting

![UI Tech stack](./design/ui-tech-stack.jpg)

### How to run it

- Navigate to the project root folder `<root-folder>/ui`
- Run `npm i`
- Run `npm start`
- In order to deploy, I have setup automation shell scripts under `<root-folder>/automation/scripts`
- Run `zsh ui-clean.sh` to clean src files
- Run `zsh ui-build.sh` to create a new build
- Run `zsh ui-deploy.sh` which copies it into aws -> `build` folder
- Then run `cdk deploy --ZurichTechSiteStack`

## Backend / API Layer Architecture

The Backend API / Rest service is built using Nest JS. On the infrastructure, it consists of a S3 bucket for hosting and Lambda services and Apigateway which act as a proxy to the request response going in and out of Nest JS.

The API is located under the following path:
`./aws/lambda/api/`

> NOTE: The Nest JS 

![API Architecture](./design//api-architecture.jpg)






