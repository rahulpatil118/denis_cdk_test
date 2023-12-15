import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class MyVpcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 1, // Use 3 Availability Zones
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
          subnetType: ec2.SubnetType.PRIVATE_WITH_NAT,
        },
        {
          cidrMask: 24,
          name: 'private-two',
          subnetType: ec2.SubnetType.PRIVATE_WITH_NAT,
        },
        {
          cidrMask: 24,
          name: 'private-three',
          subnetType: ec2.SubnetType.PRIVATE_WITH_NAT,
        },
      ],
    });

    // Create Internet Gateway and attach to VPC
    const internetGateway = new ec2.CfnInternetGateway(this, 'InternetGateway');
    const gatewayAttachment = new ec2.CfnVPCGatewayAttachment(this, 'GatewayAttachment', {
      vpcId: vpc.vpcId,
      internetGatewayId: internetGateway.ref,
    });

    // Create NAT Gateway in one of the private subnets
    const natGateway = new ec2.CfnNatGateway(this, 'NatGateway', {
      subnetId: vpc.privateSubnets[0].subnetId,
      allocationId: new ec2.CfnEIP(this, 'EIP').attrAllocationId,
    });
  }
}

