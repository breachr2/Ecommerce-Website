
variable "vpc_cidr" {
  description = "The CIDR block for the VPC"
  type        = list(string)
}

variable "vpc_name" {
  description = "The name for the VPC"
  type        = string
}

variable "public_subnet_cidr" {
  description = "List of public subnet CIDR blocks"
  type        = list(string)
}

variable "private_subnet_cidr" {
  description = "List of private subnet CIDR blocks"
  type        = list(string)
}