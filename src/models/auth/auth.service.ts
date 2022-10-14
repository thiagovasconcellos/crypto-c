import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(cryptoCAddress: string): Promise<any> {
    const user = await this.usersService.findOneBycryptoCAddress(cryptoCAddress);
    if (user) {
      return user;
    }
    return null;
  }

  async login(cryptoCAddress: string) {
    const user = await this.usersService.findOneBycryptoCAddress(cryptoCAddress);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, sub: user.cryptoCAddress };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
