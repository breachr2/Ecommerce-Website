A three-tier architecture application using Nextjs, Expressjs, and a PostgreSQL database pulled from a docker image.

### Environment variables

This project depends on some environment variables. If you are running this project locally, create a `.env` file in the root directory.

Here are the required env variables:
```
POSTGRES_PASSWORD=postgresql://<username>:<password>@<host>:<port>/<database>
```

To start up the PostgreSQL database, make sure to have Docker installed. If you are on Mac or Windows, you will need to install Docker Desktop.

### Installations for Mac and Windows:

- [Docker Desktop for Mac](https://docs.docker.com/desktop/install/windows-install/)
- [Docker Desktop for Windows](https://docs.docker.com/desktop/install/mac-install/)

### Starting the entire application with docker-compose

Run the command:

```
docker-compose up -d
```

To stop the PostgreSQL container, run the command:

```
docker-compose down
```

### Getting Started with Terraform
This guide provides step-by-step instructions to help you get started using Terraform with AWS to manage your cloud infrastructure.

1. Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)<br>
After installing the AWS CLI, you need to configure it with your credentials using your access key and secret key:
```
aws configure
```
2. Install [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

### Running the Terraform code
1. Change directory into the infrastructure directory
```
cd infrastructure
```
2. Initalize Terraform <br>
This command will install the necessary provider plugins, as defined in the configuration file:
```
terraform init
```
3. Apply Infrastructure Changes <br>
This will create/update the resources on your AWS account:
```
terraform apply
```
4. Destroy Resources <br>
To remove the infrastructure when you're done run the command:
```
terraform destroy
```