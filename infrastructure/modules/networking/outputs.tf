
output "aws_vpc_id" {
  value = aws_vpc.app_vpc.id
}

output "public_subnet_id" {
  value = aws_subnet.public_subnet.id
}

output "private_subnet_id" {
  value = aws_subnet.private_subnet.id
}

output "vpc_internet_gateway_id" {
  value = aws_internet_gateway.vpc_internet_gateway.id
}