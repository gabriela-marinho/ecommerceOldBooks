import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // *************ABRE E FECHA A CONEXÃO COM O BD************
  // COMENTADO POR: Gabriela Marinho 06/01/2022  as 05:31
  async onModuleInit() {
    //abre a conexão com bd
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    //fecha a conexão com bd
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
