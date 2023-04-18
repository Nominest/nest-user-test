import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): string {
    return this.userService.getUsers();
  }
  @Get('add')
  createUser() {
    return this.userService.createUser({
      name: 'Nomin',
      phone: 88,
      email: 'test',
    });
  }
}
