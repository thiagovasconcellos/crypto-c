import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserWalletService } from './user-wallet.service';
import { UserWalletController } from './user-wallet.controller';
import { UserWallet } from './entities/user-wallet.entity';
import { UserWalletSubscriber } from './subscribers/user-wallet.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([UserWallet])],
  controllers: [UserWalletController],
  providers: [UserWalletService, UserWalletSubscriber],
  exports: [UserWalletService]
})
export class UserWalletModule { }
