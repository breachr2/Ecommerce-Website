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

# Save the private key pem file to your local machine
resource "local_file" "private_key" {
  content = tls_private_key.rsa_4096_key.private_key_pem
  filename = "${path.module}/my-key-pair.pem"
}

# Deploying EC2 instance into public subnet of vpc
resource "aws_instance" "backend_server" {
  ami                         = var.ami
  instance_type               = var.instance_type
  availability_zone           = "us-west-2c"
  subnet_id                   = var.public_subnet_id
  key_name                    = aws_key_pair.key_pair.key_name
  associate_public_ip_address = true
  vpc_security_group_ids      = [var.ec2_security_group_id]

  tags = {
    Name = "ec2_instance_server"
  }
}