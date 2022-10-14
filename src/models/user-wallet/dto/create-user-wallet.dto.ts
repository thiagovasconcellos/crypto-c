import { IsString, IsUUID, IsInt } from 'class-validator';
class CreateUserWalletDto {

  @IsString()
  walletAddress: string;

  @IsUUID()
  userId: string;

  @IsInt()
  networkChainId: number;
}

export { CreateUserWalletDto };
