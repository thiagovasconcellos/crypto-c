import { Injectable, UnauthorizedException, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MasterKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { headers } = context.switchToHttp().getRequest();
    const masterKey = headers['master-key'];
    if (!masterKey || masterKey !== process.env.ADMIN_MASTER_KEY) {
      throw new UnauthorizedException();
    }
    return true;
  }
}