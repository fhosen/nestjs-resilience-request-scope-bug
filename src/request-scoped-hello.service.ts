import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class RequestScopedHelloService {
  constructor(@Inject(REQUEST) private request: Request) {}

  getHello(): string {
    console.log('Request id: ' + this.request.headers['x-request-id']);
    return 'Hello World!' + this.request.headers['x-request-id'];
  }
}
