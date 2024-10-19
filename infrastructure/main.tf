terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-west-2"
}

module "networking" {
  source              = "./modules/networking"
  vpc_cidr            = ["10.0.0.0/16"]
  vpc_name            = "app_vpc"
  public_subnet_cidr  = ["10.0.1.0/24"]
  private_subnet_cidr = ["10.0.2.0/24"]
}

module "security_group" {
  source = "./modules/securitygroup"
  vpc_id = module.networking.aws_vpc_id
}

module "ec2_instance" {
  source                = "./modules/ec2"
  ami                   = "ami-04dd23e62ed049936"
  instance_type         = "t2.micro"
  public_subnet_id      = module.networking.public_subnet_id
  ec2_security_group_id = module.security_group.ec2_security_group_id
}
