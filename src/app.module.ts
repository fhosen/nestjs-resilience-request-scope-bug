import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ResilienceModule } from 'nestjs-resilience';
import { RequestScopedHelloService } from './request-scoped-hello.service';
import { ResilientHelloService } from './resilient-hello.service';

@Module({
  imports: [ResilienceModule.forRoot({})],
  controllers: [AppController],
  providers: [ResilientHelloService, RequestScopedHelloService],
})
export class AppModule {}
