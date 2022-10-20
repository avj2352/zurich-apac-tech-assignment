import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ZurichTechAPIStack } from '../lib/api-config';
import { ZurichTechSiteStack } from '../lib/site-config';

test('Expect Frontend Stack to contain - S3 bucket, Bucket deployment, CloudFront Distribution', () => {  
  // ARRANGE
  const app = new cdk.App();    
  const uiStack = new ZurichTechSiteStack(app, 'MyTestUIStack', {});
  // ACT  
  const uiTemplate = Template.fromStack(uiStack);
  // ASSERT
  uiTemplate.resourceCountIs('AWS::S3::Bucket', 1);
  uiTemplate.resourceCountIs('AWS::CloudFront::Distribution', 1);
  
});


test('Expect Backend Stack to contain - 2 Lambda Functions, Bucket Deployment, 2 ApiGateway RestApi', () => {  
  // ARRANGE
  const app = new cdk.App();    
  const apiStack = new ZurichTechAPIStack(app, 'MyTestApiStack', {});
  // ACT  
  const apiTemplate = Template.fromStack(apiStack);
  // ASSERT
  apiTemplate.resourceCountIs('AWS::Lambda::Function', 2);
  apiTemplate.resourceCountIs('AWS::ApiGateway::RestApi', 2);
  
});
