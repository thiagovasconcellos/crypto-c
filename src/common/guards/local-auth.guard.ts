import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/models/auth/auth.service';

@Injectable()
export class LocalAuthGuard extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(cryptoCAddress: string): Promise<any> {
    const user = await this.authService.validateUser(cryptoCAddress);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}