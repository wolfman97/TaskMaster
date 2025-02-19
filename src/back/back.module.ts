import { Module } from '@nestjs/common';
import { BackService } from './back.service';
import { BackController } from './back.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BackController],
  providers: [BackService],
  imports: [PrismaModule],
})
export class BackModule {}
