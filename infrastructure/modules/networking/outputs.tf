
output "aws_vpc" {
  value = aws_vpc.app_vpc.id
}

output "public_subnet" {
  value = aws_subnet.public_subnet.id
}

output "private_subnet" {
  value = aws_subnet.private_subnet.id
}

output "vpc_internet_gateway" {
  value = aws_internet_gateway.vpc_internet_gateway.id
}