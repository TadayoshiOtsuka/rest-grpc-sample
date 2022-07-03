SHELL=/bin/bash

.PHONY: $(shell egrep -oh ^[a-zA-Z0-9][a-zA-Z0-9_-]+: $(MAKEFILE_LIST) | sed 's/://')

setup:
	docker-compose up --build

up-d:
	docker-compose up -d

down:
	docker-compose kill

gen:
	docker-compose up gen