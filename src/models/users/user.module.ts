import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserWalletModule } from '../user-wallet/user-wallet.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserWalletModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})

export class UserModule { }
