import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DenisCdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DenisCdkTestQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
       // create custom vpc
       const vpc = new ec2.Vpc(this, 'Denis-vpc', { 
        ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'), 
        vpcName : "Denis-vpc",
           natGateways: 1,
           maxAzs: 1,
        subnetConfiguration: [
            {
              cidrMask: 24,
              name: 'public-one',
              subnetType: ec2.SubnetType.PUBLIC,
            },
            {
              cidrMask: 24,
              name: 'public-two',
              subnetType: ec2.SubnetType.PUBLIC,
            },
            {
              cidrMask: 24,
              name: 'public-three',
              subnetType: ec2.SubnetType.PUBLIC,
            },
            {
              cidrMask: 24,
              name: 'private-one',
              subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
            },
            {
              cidrMask: 24,
              name: 'private-two',
              subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
            },
            {
              cidrMask: 24,
              name: 'private-three',
              subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
            },
        ],
      });
  }
}
