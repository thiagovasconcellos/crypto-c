import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWhitelistSubscriberDto } from './dto/create-whitelist-subscriber.dto';
// import { UpdateWhitelistSubscriberDto } from './dto/update-whitelist-subscriber.dto';
import { WhitelistSubscriber } from './entities/whitelist-subscriber.entity';
import { WhitelistSubscribeJobService } from '../../jobs/whitelist-subscribe/whitelist-subscribe.producer.service';

@Injectable()
export class WhitelistSubscribersService {
  constructor(
    @InjectRepository(WhitelistSubscriber)
    private repository: Repository<WhitelistSubscriber>,
    private whitelistSubscribeJob: WhitelistSubscribeJobService
  ) { }
  async create(createWhitelistSubscriberDto: CreateWhitelistSubscriberDto) {
    const emailAlreadyExists = await this.repository.findOne({
      where: {
        email: createWhitelistSubscriberDto.email
      }
    });
    if (emailAlreadyExists) {
      throw new BadRequestException('Email already exists');
    }
    const { email, language } = createWhitelistSubscriberDto;
    const response = await this.repository.save(createWhitelistSubscriberDto);
    await this.whitelistSubscribeJob.sendMail(email, language);
    return response;
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  // update(id: number, updateWhitelistSubscriberDto: UpdateWhitelistSubscriberDto) {
  //   return `This action updates a #${id} whitelistSubscriber`;
  // }

  async remove(id: number) {
    return this.repository.update(id, {
      isActive: false
    });
  }
}
