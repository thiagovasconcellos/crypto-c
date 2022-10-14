import { PartialType } from '@nestjs/mapped-types';
import { CreateWhitelistSubscriberDto } from './create-whitelist-subscriber.dto';

export class UpdateWhitelistSubscriberDto extends PartialType(CreateWhitelistSubscriberDto) {}
