
variable "ami" {
  description = "The AMI to use for this instance"
  type        = string
}

variable "instance_type" {
  description = "The instance type to use for this instance"
  type        = string
}

variable "instance_name" {
  description = "The name for this EC2 instance"
  type        = string
}