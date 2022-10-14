import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';

import { UserModule } from './models/users/user.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './models/auth/auth.module';
import { AuthController } from './models/auth/auth.controller';
import { UserWalletModule } from './models/user-wallet/user-wallet.module';
import { WhitelistsModule } from './models/whitelists/whitelists.module';
import { WhitelistSubscribersModule } from './models/whitelist-subscribers/whitelist-subscribers.module';
import { WhitelistSubscribersJobsModule } from './jobs/whitelist-subscribe/whitelist-subscribe.module';
import { MailerModule } from './models/mailer/mailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // entities: [
      //   User,
      //   UserWallet
      // ],
      logging: process.env.NODE_ENV === 'development' ? true : false,
      autoLoadEntities: true
    }),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
      }
    }),
    UserModule,
    CoreModule,
    AuthModule,
    UserWalletModule,
    WhitelistsModule,
    WhitelistSubscribersModule,
    WhitelistSubscribersJobsModule,
    MailerModule
  ],
  exports: [BullModule],
  controllers: [AuthController]
})

export class AppModule { }
