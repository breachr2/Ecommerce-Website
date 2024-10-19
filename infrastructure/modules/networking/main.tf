
resource "aws_vpc" "app_vpc" {
  cidr_block = var.vpc_cidr[0]

  tags = {
    Name = var.vpc_name
  }
}

resource "aws_subnet" "public_subnet" {
  vpc_id     = aws_vpc.app_vpc.id
  cidr_block = var.public_subnet_cidr[0]

  tags = {
    Name = "public_subnet"
  }
}

resource "aws_subnet" "private_subnet" {
  vpc_id     = aws_vpc.app_vpc.id
  cidr_block = var.private_subnet_cidr[0]

  tags = {
    Name = "private_subnet"
  }
}

resource "aws_internet_gateway" "vpc_internet_gateway" {
  vpc_id = aws_vpc.app_vpc.id

  tags = {
    Name = "vpc_internet_gateway"
  }
}

resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.app_vpc.id

  # Route traffic destined for "0.0.0.0/0" to the internet gateway
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.vpc_internet_gateway.id
  }
  tags = {
    Name = "public_route_table"
  }
}

resource "aws_route_table" "private_route_table" {
  vpc_id = aws_vpc.app_vpc.id

  tags = {
    Name = "private_route_table"
  }
}

resource "aws_route_table_association" "public_route_table_association" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_route_table.id
}

resource "aws_route_table_association" "private_route_table_association" {
  subnet_id      = aws_subnet.private_subnet.id
  route_table_id = aws_route_table.private_route_table.id
}