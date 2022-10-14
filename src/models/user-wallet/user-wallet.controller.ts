import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { UserWalletService } from './user-wallet.service';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';

@Controller('userWallet')
export class UserWalletController {
  constructor(private readonly userWalletService: UserWalletService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createUserWalletDto: CreateUserWalletDto) {
    return this.userWalletService.create(createUserWalletDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.userWalletService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':address')
  findOne(@Param('address') address: string) {
    return this.userWalletService.findOne(address);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWalletService.remove(+id);
  }
}
