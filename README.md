# Introduction 

## Folder structure
```
src
├── authentication
├── common
│   ├── constants
│   ├── decorators
│   │   ├── metadata
│   │   └── requests
│   ├── exceptions
│   ├── guards
│   ├── helpers
│   │   ├── exceptions
│   │   └── responses
│   ├── interfaces
│   ├── middlewares
│   │   └── models
│   ├── pipes
│   ├── serializers
│   │   ├── exceptions
│   │   └── responses
│   └── validations
├── config
│   ├── api
│   ├── app
│   ├── cache
│   ├── database
│   │   └── postgres
│   ├── queue
│   ├── session
│   └── storage
├── database
│   ├── factories
│   │   ├── addresses
│   │   └── users
│   ├── migrations
│   └── seeders
│       ├── addresses
│       └── users
├── core
│   ├── interceptors
├── jobs
│   ├── consumers
│   │   └── verification-mail
│   └── producers
│       └── verification-mail
├── mails
│   └── verification
├── models
│   └── users
│       ├── constants
│       ├── entities
│       ├── interfaces
│       └── serializers
├── providers
|   ├── cache
│   │   └── redis
│   ├── database
│   │   └── postgres
│   └── queue
│       └── redis
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
```

## Local environment

* Install and configure a new PostgreSQL instance
* Use credentials based on ormconfig.json
* Create new database called "cryptoC"
* Install dependencies

### Run migrations


```bash
yarn typeorm migration:run
or
npx run typeorm migration:run
```

### Run app itself
```bash
yarn start
or
npm run start
```

## Create new migration

```bash
yarn typeorm migration:create <migration_name> -d src/database/migrations
```

## Create a new resource ( CRUD <controller, module, entities, service & dto >)

```bash
nest g resource <name>
```