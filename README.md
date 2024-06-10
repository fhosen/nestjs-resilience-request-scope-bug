## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Code description
There is 1 controller and 2 services:
- AppController
- ResilientHelloService (Resilient by using `@UseResilience(new CircuitBreakerStrategy())`)
- RequestScopedHelloService (Request Scoped by using `@Inject(REQUEST)` )

AppController -> ResilientHelloService -> RequestScopedHelloService

## Bug reproduction:
  
Current behaviour:
- Start the server
- Make a GET request to `localhost:3000/` using the custom header `x-request-id` with value 1.
- You will see in the logs `Request id: 1` and the response of the server will be `Hello World!1`
- Make a second GET request to `localhost:3000/` using the custom header `x-request-id` with value 2.
- You will see in the logs `Request id: 1` and the response of the server will be `Hello World!1`

Expected behaviour:
- Start the server
- Make a GET request to `localhost:3000/` using the custom header `x-request-id` with value 1.
- You will see in the logs `Request id: 1` and the response of the server will be `Hello World!1`
- Make a second GET request to `localhost:3000/` using the custom header `x-request-id` with value 2.
- You will see in the logs `Request id: 2` and the response of the server will be `Hello World!2`

Problem:
The request object is being cached between different request due to the use of `@UseResilience(new CircuitBreakerStrategy())`, if one removes the decorator from `ResilientHelloService.getHello` the behaviour is the expected.


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
