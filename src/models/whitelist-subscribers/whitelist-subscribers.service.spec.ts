import { Test, TestingModule } from '@nestjs/testing';
import { WhitelistSubscribersService } from './whitelist-subscribers.service';

describe('WhitelistSubscribersService', () => {
  let service: WhitelistSubscribersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhitelistSubscribersService],
    }).compile();

    service = module.get<WhitelistSubscribersService>(WhitelistSubscribersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
