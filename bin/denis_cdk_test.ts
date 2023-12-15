#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DenisCdkTestStack } from '../lib/denis_cdk_test-stack';
import {sqsStack} from '../lib/sqsStack';

const app = new cdk.App();


new DenisCdkTestStack(app, 'DenisCdkTestStack', {

   env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
   // env: { account: '123456789012', region: 'us-east-1' },
});

new sqsStack(app,'sqsStack',{
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
   // env: { account: '123456789012', region: 'us-east-1' },
})