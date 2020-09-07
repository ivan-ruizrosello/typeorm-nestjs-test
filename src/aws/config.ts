import * as AWS from 'aws-sdk';

const {
  AWS_S3_REGION,
  AWS_S3_IAM_KEY_ID,
  AWS_S3_IAM_ACCESS_KEY,
} = process.env;

AWS.config.update({
  region: AWS_S3_REGION,
  accessKeyId: AWS_S3_IAM_KEY_ID,
  secretAccessKey: AWS_S3_IAM_ACCESS_KEY,
});

export default AWS;
