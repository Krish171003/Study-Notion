output "ec2_public_ip" {
  value = aws_instance.study_notion_ec2.public_ip
}
