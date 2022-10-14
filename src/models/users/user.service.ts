import { randomBytes } from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserWalletService } from '../user-wallet/user-wallet.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userWalletService: UserWalletService
  ) { }

  async create(user: CreateUserDto): Promise<User> {
    let createdUser: User;
    if (!user.id) {
      createdUser = await this.userRepository.save({
        cryptoCAddress: randomBytes(24).toString('hex'),
        isActive: true
      });
      createdUser.id;
    }
    this.userWalletService.create({
      walletAddress: user.walletAddress,
      networkChainId: 1,
      userId: user.id ? user.id : createdUser.id
    });
    return createdUser;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  findOneBycryptoCAddress(cryptoCAddress: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        cryptoCAddress
      }
    });
  }
}
