import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'

import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { LocalStrategy } from '../../authentication/local.strategy';
import { JwtStrategy } from '../../authentication/jwt.strategy';
import { jwtConstants } from '../../common/constants/constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
