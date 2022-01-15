import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './Dto/create-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private database: PrismaService) {}
// RETORNO DA MINHA FUNÇÃO É UMA PROMISE
  async create(data: CreateUserDto): Promise<User> {
    const emailExist = await this.database.user.findUnique({
      where: { email: data.email },
    });

    if (emailExist) {
      throw new ConflictException('Tente outro E-mail, esse já existe');
    }

    const nicknameExist = await this.database.user.findUnique({
      where: { nickname: data.nickname },
    });

    if (nicknameExist) {
      throw new ConflictException('Nickname em uso, tente outro');
    }
    // CRIANDO O HASH DA SENHA, POIS ELA NÃO DEVE APARECER PARA O USUARIO E NEM NO BD
    const hashSenha = await bcrypt.hash(data.password, 10);
    const user = await this.database.user.create({
      data: {
        ...data,
        password: hashSenha,
      },
    });
    // LEMBRANDO DE FAZER O DELETE DA SENHA
    delete user.password;
    return user;
  }
}
