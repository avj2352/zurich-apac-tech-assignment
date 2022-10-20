#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ZurichTechSiteStack } from '../lib/site-config';
import { ZurichTechAPIStack } from '../lib/api-config';

const app = new cdk.App();

// Frontend -  Stack to create - S3, CloudFront, Deployment
new ZurichTechSiteStack(app, 'ZurichTechSiteStack', {  
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' }  
});

// API - Stack to create - APIGateway, Lambda, Deploymentxs
new ZurichTechAPIStack(app, 'ZurichTechAPIStack', {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' }
})