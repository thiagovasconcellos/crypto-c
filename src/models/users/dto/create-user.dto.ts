import { IsString, IsUUID, IsOptional, IsBoolean, IsDate } from 'class-validator';
class CreateUserDto {

  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  cryptoCAddress: string;

  @IsString()
  walletAddress: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}

export { CreateUserDto };
