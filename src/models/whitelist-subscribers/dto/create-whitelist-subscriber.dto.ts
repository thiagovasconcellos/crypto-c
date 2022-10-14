import { IsEmail, IsOptional } from "class-validator";

export class CreateWhitelistSubscriberDto {
  @IsOptional()
  id: string

  @IsEmail()
  email: string;

  @IsOptional()
  isActive: boolean;

  @IsOptional()
  language: string

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;
}
