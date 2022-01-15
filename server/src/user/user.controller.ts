import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './Dto/create-user.dto';
import { User } from '@prisma/client';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Cria um usuario',
  })
  create(@Body() data: CreateUserDto): Promise<User> {
    console.log('hahahah');
    return this.userService.create(data);
  }
}
