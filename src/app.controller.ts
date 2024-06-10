import { Controller, Get } from '@nestjs/common';
import { ResilientHelloService } from './resilient-hello.service';

@Controller()
export class AppController {
  constructor(private readonly resilientHelloService: ResilientHelloService) {}

  @Get()
  getHello(): Promise<string> {
    return this.resilientHelloService.getHello();
  }
}
