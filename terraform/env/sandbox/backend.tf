terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.17.0"
    }
  }

    backend "s3" {
      bucket         = "rest-grpc-sample-tf-state"
      region         = "ap-northeast-1"
      key            = "terraform.tfstate"
      encrypt        = true
    }
}

provider "aws" {
  region = var.region

  default_tags {
    tags = var.default_tags
  }
}
