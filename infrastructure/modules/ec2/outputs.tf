
output "ec2_instance" {
  value = aws_instance.backend_server.id
}