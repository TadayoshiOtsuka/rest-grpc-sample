/**
 * @fileoverview gRPC-Web generated client stub for message
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  MessageRequest,
  MessageResponse} from './message_pb';

export class MessageServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    MessageResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    MessageResponse.deserializeBinary
  );

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/message.MessageService/Get',
      request,
      metadata || {},
      this.methodInfoGet);
  }

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    MessageResponse,
    (request: MessageRequest) => {
      return request.serializeBinary();
    },
    MessageResponse.deserializeBinary
  );

  create(
    request: MessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MessageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/message.MessageService/Create',
      request,
      metadata || {},
      this.methodInfoCreate,
      callback);
  }

}

