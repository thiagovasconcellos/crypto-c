import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent
}
  from 'typeorm'
import { UserWallet } from '../entities/user-wallet.entity';

@EventSubscriber()
export class UserWalletSubscriber implements EntitySubscriberInterface<UserWallet> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return UserWallet;
  }

  afterInsert(event: InsertEvent<UserWallet>): void | Promise<any> {
    console.log('After insert');
  }
}