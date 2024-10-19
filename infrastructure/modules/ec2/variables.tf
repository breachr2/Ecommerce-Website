
variable "ami" {
  description = "The AMI to use for this instance"
  type        = string
}

variable "instance_type" {
  description = "The instance type used for this instance"
  type        = string
}

variable "public_subnet_id" {
  description = "The subnet to deploy thiS EC2 instance to"
  type        = string
}

variable "ec2_security_group_id" {
  description = "The security group for this EC2 instance"
  type        = string
}