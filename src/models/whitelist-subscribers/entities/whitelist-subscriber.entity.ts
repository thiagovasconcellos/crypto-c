import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'WhitelistSubscribers' })
export class WhitelistSubscriber {

  @Exclude()
  @PrimaryGeneratedColumn('increment', { name: 'ID' })
  id: string;

  @Column({ name: 'Email' })
  email: string;

  @Column({ name: 'IsActive' })
  isActive: boolean;

  @Column({ name: 'Language' })
  language: string;

  @CreateDateColumn({ name: 'CreatedAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'UpdatedAt' })
  updatedAt: Date;

}
