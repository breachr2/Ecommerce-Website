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