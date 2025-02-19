import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackModule } from './back/back.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BackModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
