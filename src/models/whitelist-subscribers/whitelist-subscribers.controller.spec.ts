import { Test, TestingModule } from '@nestjs/testing';
import { WhitelistSubscribersController } from './whitelist-subscribers.controller';
import { WhitelistSubscribersService } from './whitelist-subscribers.service';

describe('WhitelistSubscribersController', () => {
  let controller: WhitelistSubscribersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhitelistSubscribersController],
      providers: [WhitelistSubscribersService],
    }).compile();

    controller = module.get<WhitelistSubscribersController>(WhitelistSubscribersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
