import { S3Client } from "@aws-sdk/client-s3";
import "dotenv/config";

export const bucketName = process.env.AWS_BUCKET_NAME || "";
export const region = process.env.AWS_REGION || "us-west-2";
export const accessKeyId = process.env.AWS_ACCESS_KEY_ID || "";
export const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || "";

const s3Client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

export default s3Client;
