# REST-gRPC-Sample(WIP)

setup

```
make setup
or
docker-compose up --build
```

generate go/ts interfaces

```
make gen
or
docker-compose up gen
```

launch gen/client/server

```
make up-d
or
docker-compose up -d
```

create AWS resources

```
cd terraform/env/sandbox
make plan
make apply
```
