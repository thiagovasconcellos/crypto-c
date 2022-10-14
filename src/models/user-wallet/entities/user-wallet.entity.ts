import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

import { Exclude } from 'class-transformer';

@Entity({ name: 'UserWallets' })
export class UserWallet {
  constructor(partial: Partial<UserWallet>) {
    Object.assign(this, partial);
  }

  @Exclude()
  @PrimaryGeneratedColumn('uuid', { name: 'ID' })
  id: string;

  @Exclude()
  @Column({ name: 'UserID' })
  userId: string;

  @Column({
    name: 'WalletAddress',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
      algorithm: 'aes-256-cbc',
      ivLength: 16,
      iv: 'ff5ac19190424b1d88f9419ef949ae56'
    })
  })
  walletAddress: string;

  @Column({ name: 'NetworkChainID' })
  networkChainId: number;

  @Column({ name: 'IsActive' })
  isActive: boolean;

  @Exclude()
  @CreateDateColumn({ name: 'CreatedAt' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ name: 'UpdatedAt' })
  updatedAt: Date;
}