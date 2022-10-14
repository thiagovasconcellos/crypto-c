import { Global, Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { ConfigModule } from '@nestjs/config';
@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  exports: [MailerService],
  providers: [MailerService]
})
export class MailerModule { }
