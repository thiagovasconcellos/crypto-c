import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { fastifyHelmet } from 'fastify-helmet';
import fastifyCsrf from 'fastify-csrf';
import fastifySession from 'fastify-session'

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(
      {
        logger: true
      }
    ),
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.register(fastifyHelmet);

  await app.register(fastifySession, {
    secret: process.env.COOKIE_SECURE_SECRET,
    cookieName: 'cryptoC-session',
    cookie: {
      path: '/'
    }
  });

  await app.register(fastifyCsrf, { sessionPlugin: 'fastify-session' });

  await app.listen(3333, '0.0.0.0');
}
bootstrap();
