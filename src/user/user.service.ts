import { Injectable } from '@nestjs/common';
import { User } from './user.schema';

@Injectable()
export class UserService {
  users = [];
  getAllUsers(): string {
    throw new Error('Method not implemented.');
  }
  getUsers(): string {
    return 'All Users';
  }
  createUser(user: User) {
    this.users.push(user);
    return this.users;
  }
}
