SHELL=/bin/bash

.PHONY: $(shell egrep -oh ^[a-zA-Z0-9][a-zA-Z0-9_-]+: $(MAKEFILE_LIST) | sed 's/://')

fmt:
	terraform fmt -recursive
	terraform fmt -check

plan: fmt
	terraform plan -var-file sandbox.tfvars

plan-verbose: fmt
	TF_LOG=debug terraform plan -var-file sandbox.tfvars

apply: fmt
	terraform apply -var-file sandbox.tfvars
