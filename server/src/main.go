package main

import (
	"fmt"
	"net"

	"github.com/TadayoshiOtsuka/rest-grpc-sample/src/infra/handlers"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	fmt.Println("start")
	port := 8080
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		panic(err)
	}

	server := grpc.NewServer()
	handlers.RegisterMessageServer(server)
	reflection.Register(server)

	err = server.Serve(listener)
	if err != nil {
		fmt.Println("Unexpected Error", err)
	}
}
