# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

# project assignment 
Denis - 
1. create a github repo
2. write a code to with AWS CDK to create following resources
- new VPC
- 3 public subnets (named as public-one, public-two, public-three)
- 3 private subnets (named as private-one, private-two, private-three)
- Internet Gateway
- single NAT gateway (in any AZ)
- make sure to establish routing that all required subnets has access to internet either through Internet or NAT gateway (depending on the topology)
3. demonstrate how you split the code into separate files (for readability, e.g. NAT gateway configuration provided in a separate .ts file) while having all the resources within the same AWS stack
4. Produce a Dockerfile, so that anyone w/o local CDK environment can build your code and apply it by executing docker image with `docker run -it your_image_name`
5. Make AWS region switchable through the docker environment variable with a default region set to "us-east-2"

Ideally, if you test your code, because our team will be provisioning your stacks to validate the result.
Also, please honestly track your time to accomplish this test and let us know after completion.

Is it feasible/doable task for you? If so, when do you reckon to finish it?

Thank you!

# run this docker 

# need to setup aws accounts createds in .aws file and 

docker build -t denis-cdk:latest .
docker run -p 8090:8090 denis-cdk:latest


# Deploy Stacks in Sequence:
Create a shell script or use a command-line tool to deploy the stacks in the desired sequence. For example:

# Deploy StackA
cdk deploy StackA

# Deploy StackB
cdk deploy StackB

# Deploy StackC
cdk deploy StackC
