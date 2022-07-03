package handler

import (
	"context"

	"github.com/TadayoshiOtsuka/rest-grpc-sample/src/grpc/message"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
)

func RegisterMessageServer(grpcServer *grpc.Server) {
	messageServer := &server{}
	message.RegisterMessageServiceServer(grpcServer, messageServer)
}

type server struct {
	// TODO: injection usecase
}

func (s *server) Get(*emptypb.Empty, message.MessageService_GetServer) error {
	return nil
}

func (s *server) Create(context.Context, *message.MessageRequest) (*message.MessageResponse, error) {
	return nil, nil
}
