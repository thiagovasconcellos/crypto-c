import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { MailerService } from '../../models/mailer/mailer.service';

type Data = {
  email: string;
  language: string;
}

@Processor('whitelist-subscribe')
export class WhitelistSubscribeProcessor {
  private readonly logger = new Logger(this.constructor.name)

  constructor(
    private mailerService: MailerService
  ) { }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(`Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(job.data)}`)
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    this.logger.debug(`Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(result)}`)
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    this.logger.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack)
  }

  @Process('whitelist-subscribe')
  async transcode(job: Job<Data>) {
    //
    const result = await this.mailerService.whitelistSubscription(job.data.email, job.data.language);
    return { response: result }
  }
}