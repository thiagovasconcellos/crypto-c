import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserWallet } from './entities/user-wallet.entity';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';
@Injectable()
export class UserWalletService {
  constructor(
    @InjectRepository(UserWallet)
    private userWalletRepository: Repository<UserWallet>
  ) { }

  create(createUserWalletDto: CreateUserWalletDto): Promise<UserWallet> {
    return this.userWalletRepository.save({
      networkChainId: createUserWalletDto.networkChainId,
      walletAddress: createUserWalletDto.walletAddress,
      userId: createUserWalletDto.userId
    });
  }

  findAll(): Promise<UserWallet[]> {
    return this.userWalletRepository.find();
  }

  findOne(walletAddress: string): Promise<UserWallet | undefined> {
    return this.userWalletRepository.findOne({
      where:
        { walletAddress }
    });
  }

  remove(id: number) {
    return `This action removes a #${id} userWallet`;
  }
}
