import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent
}
  from 'typeorm'
import { User } from '../user.entity';

@EventSubscriber()
export class UserWalletSubscriber implements EntitySubscriberInterface<User> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  afterInsert(event: InsertEvent<User>): void | Promise<any> {
    console.log('After insert');
    //event.entity.cryptoCAddress
  }
}