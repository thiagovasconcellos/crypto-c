import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as sendGrid from '@sendgrid/mail';

type TemplateByLanguage = {
  pt: string;
  en: string;
  es: string;
}

@Injectable()
export class MailerService {
  private readonly logger = new Logger(this.constructor.name)
  constructor(private configService: ConfigService) { }

  public async whitelistSubscription(email: string, language: string): Promise<boolean> {
    const templateByLanguage: TemplateByLanguage = {
      pt: 'd-05b41c2cc2ce4b35a7b79c8d2a8dfd44',
      en: 'd-c250017f5a3f4cff9e2a926c96e394a8',
      es: ''
    };

    const secret = this.configService.get<string>('MAIL_SECRET');
    sendGrid.setApiKey(secret);

    let response: boolean;

    const msg = {
      to: email,
      from: 'cryptoC.official@gmail.com',
      templateId: templateByLanguage[language]
    }

    sendGrid.send(msg)
      .then(() => {
        response = true;
      })
      .catch((error) => {
        this.logger.error(error);
        response = false;
      })
    return response;
  }
}