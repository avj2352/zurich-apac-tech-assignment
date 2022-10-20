import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Distribution, HttpVersion, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import * as path from 'path';

/**
 * PAJ - Stack to create
 * 1. S3 bucket
 * 2. S3 bucket deployment
 * 3. Cloudfront
 */
export class ZurichTechSiteStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    // create S3 bucket
    const websiteBucket = new Bucket(this, 'ZurichTechSiteBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true
    });

   
    // create cloudfront with domain + hosted zone + certificate
    const cloudFront = new Distribution(this, 'ZurichTechSiteDistribution', {
      defaultBehavior: {
        origin: new S3Origin(websiteBucket),         
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },      
      httpVersion: HttpVersion.HTTP2
    });

    // create bucket deployment
    new BucketDeployment(this, 'ZurichTechSiteDeploy', {
      sources:[Source.asset(path.join(__dirname, '..', 'build'))],
      destinationBucket: websiteBucket,
      distribution: cloudFront,
      distributionPaths: ['/*']
    });


    // create output for S3 deployment process
    new CfnOutput(this, 'ZurichTechSiteBucketNameExport', {
      value: websiteBucket.bucketName,
      exportName: 'ZurichTechSiteBucketName'
    });

    // create out for cloudfront deployment process
    new CfnOutput(this, 'ZurichTechSiteURL', {
      value: cloudFront.distributionDomainName,
      exportName: 'ZurichTechSiteURL'
    });

  }
}
