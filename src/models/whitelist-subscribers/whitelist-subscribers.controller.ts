import { Controller, Get, Post, Body, Param, Delete, Headers, UseGuards } from '@nestjs/common';
import { WhitelistSubscribersService } from './whitelist-subscribers.service';
import { CreateWhitelistSubscriberDto } from './dto/create-whitelist-subscriber.dto';
import { MasterKeyGuard } from 'src/common/guards/master-key.guard';
// import { UpdateWhitelistSubscriberDto } from './dto/update-whitelist-subscriber.dto';

@Controller('whitelist-subscribers')
export class WhitelistSubscribersController {
  constructor(private readonly whitelistSubscribersService: WhitelistSubscribersService) { }

  @Post()
  create(
    @Body() createWhitelistSubscriberDto: CreateWhitelistSubscriberDto,
    @Headers('language') headers: string
  ) {
    createWhitelistSubscriberDto.language = headers;
    return this.whitelistSubscribersService.create(createWhitelistSubscriberDto);
  }

  @Get()
  @UseGuards(MasterKeyGuard)
  findAll() {
    return this.whitelistSubscribersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whitelistSubscribersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWhitelistSubscriberDto: UpdateWhitelistSubscriberDto) {
  //   return this.whitelistSubscribersService.update(+id, updateWhitelistSubscriberDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whitelistSubscribersService.remove(+id);
  }
}
