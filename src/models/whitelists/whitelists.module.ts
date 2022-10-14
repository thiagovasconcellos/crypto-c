import { Module } from '@nestjs/common';
import { WhitelistsService } from './whitelists.service';
import { WhitelistsController } from './whitelists.controller';

@Module({
  controllers: [WhitelistsController],
  providers: [WhitelistsService]
})
export class WhitelistsModule {}
