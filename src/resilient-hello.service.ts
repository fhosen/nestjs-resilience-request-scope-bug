import { Injectable } from '@nestjs/common';
import { CircuitBreakerStrategy, UseResilience } from 'nestjs-resilience';
import { RequestScopedHelloService } from './request-scoped-hello.service';

@Injectable()
export class ResilientHelloService {
  constructor(private requestScopedHelloService: RequestScopedHelloService) {}

  @UseResilience(new CircuitBreakerStrategy())
  getHello(): Promise<string> {
    return Promise.resolve(this.requestScopedHelloService.getHello());
  }
}
