provider "aws" {
  region = var.region
}

resource "aws_security_group" "study_notion_sg" {
  name = "study-notion-sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # ❌ INTENTIONAL VULNERABILITY
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "study_notion_ec2" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = var.instance_type
  security_groups = [aws_security_group.study_notion_sg.name]

  tags = {
    Name = "StudyNotion-EC2"
  }
}
