
module "networking" {
  source              = "../networking"
  vpc_cidr            = ["10.0.0.0/16"]
  vpc_name            = "app_vpc"
  public_subnet_cidr  = ["10.0.1.0/24"]
  private_subnet_cidr = ["10.0.2.0/24"]
}

module "security_group" {
  source = "../securitygroup"
  vpc_id = module.networking.aws_vpc_id
}

# Generating a new RSA private key
resource "tls_private_key" "rsa_4096_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

# Creating key pair on AWS to connect to the EC2 instance
resource "aws_key_pair" "key_pair" {
  key_name   = "my-key-pair"
  public_key = tls_private_key.rsa_4096_key.public_key_openssh
}

# Deploying EC2 instance into public subnet of vpc
resource "aws_instance" "backend_server" {
  ami                    = var.ami
  instance_type          = var.instance_type
  subnet_id              = module.networking.public_subnet_id
  key_name               = aws_key_pair.key_pair.key_name
  vpc_security_group_ids = [module.security_group.ec2_security_group_id]

  tags = {
    Name = var.instance_name
  }
}