import { Module } from '@nestjs/common';
import { WhitelistSubscribersService } from './whitelist-subscribers.service';
import { WhitelistSubscribersController } from './whitelist-subscribers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhitelistSubscriber } from './entities/whitelist-subscriber.entity';
import { WhitelistSubscribeJobService } from 'src/jobs/whitelist-subscribe/whitelist-subscribe.producer.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [TypeOrmModule.forFeature([WhitelistSubscriber]),
  BullModule.registerQueue({
    name: 'whitelist-subscribe'
  }),
  ],
  controllers: [WhitelistSubscribersController],
  providers: [WhitelistSubscribersService, WhitelistSubscribeJobService]
})
export class WhitelistSubscribersModule { }
