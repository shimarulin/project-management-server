# Project management server example

## Description

Project management server build with TypeScript, REST API powered by [NestJS](https://nestjs.com/) and [MikroORM](https://mikro-orm.io/) using SQLite under hood.

## Installation

1. Install dependencies via `yarn`
2. Create DB schema via `npx mikro-orm schema:create -r`
3. Run via `yarn start` or `yarn start:dev` (watch mode) or `yarn start:debug`
4. Example API is running on http://localhost:3000/api/v1

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# debug mode (like watch but with NodeJS debugger)
$ yarn start:debug

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

This code is available under the [MIT license](LICENSE).
