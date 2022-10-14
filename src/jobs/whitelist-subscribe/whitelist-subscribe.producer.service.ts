import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class WhitelistSubscribeJobService {
  constructor(@InjectQueue('whitelist-subscribe') private queue: Queue) { }

  async sendMail(email: string, language: string) {
    await this.queue.add('whitelist-subscribe', {
      email,
      language
    }, {
      delay: 3000
    });
  }
}