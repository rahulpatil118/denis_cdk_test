#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {MyVpcStack} from '../lib/MyVpcStack';


const app = new cdk.App();


new MyVpcStack(app, 'DenisCdkTestStack', {

   env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
   // env: { account: '123456789012', region: 'us-east-1' },
});


