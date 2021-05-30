## Description

Postgres + REST + GraphQL

ТЗ:
```bash
Нужно сделать на Nest.js простейщий круд.
Попробовать две бд: Mongo и Postgres, можно любые сущности. 
Единственное усложнение: надо, чтобы у них была связь - многие ко многим. 
Например, у нас есть две сущности: user и group.
У пользователя может быть много групп, и у групп может быть много пользователей. 
Еще у пользователей должно быть поле friends, в котором также объекты user нужно сначала сделать REST, а потом перенести тоже самое на GraphQL.
```

Часть задания с использованием MongoDB: https://github.com/Unvios/ilink-test-task-mongo

## Before installation

Install and configure [Docker](https://docs.docker.com/get-docker/).

Install and configure [Docker Compose](https://docs.docker.com/compose/install/).

## Before running

```bash
$ cp ./.env.example ./.env

# Then configure the environment variables in the .env file
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ docker-compose build
$ docker-compose up
```

## Running the app (Without Docker)

```bash
$ npm run start:dev
```

## Routes
Swagger: /docs
GraphQL Playground: /graphql
