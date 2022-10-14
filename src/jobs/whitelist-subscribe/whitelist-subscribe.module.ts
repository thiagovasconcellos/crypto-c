import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { WhitelistSubscribeJobService } from './whitelist-subscribe.producer.service';
import { WhitelistSubscribeProcessor } from './whitelist-subscribe.processor';
import { MailerService } from 'src/models/mailer/mailer.service';


@Module({
  imports: [
    BullModule.registerQueue({
      name: 'whitelist-subscribe'
    }),
  ],
  providers: [MailerService, WhitelistSubscribeProcessor, WhitelistSubscribeJobService],
  exports: [WhitelistSubscribeJobService]
})
export class WhitelistSubscribersJobsModule { }
