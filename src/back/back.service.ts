import { Injectable } from '@nestjs/common';
import { CreateBackDto } from './dto/create-back.dto';
import { UpdateBackDto } from './dto/update-back.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BackService {
  constructor(private prisma: PrismaService){}
  create(createBackDto: CreateBackDto) {
    return this.prisma.back.create({
      data: createBackDto,
    });
  }

  findAllAlive() {
    return this.prisma.back.findMany({
      where: { estado: 'pendiente' },
    });
  }

  findAllEstado() {
    return this.prisma.back.findMany({
      where: { estado: 'completada' },
    });
  }

  findOne(id: number) {
    return this.prisma.back.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBackDto: UpdateBackDto) {
    return this.prisma.back.update({
      where: { id },
      data: updateBackDto,
    });
  }

  remove(id: number) {
    return this.prisma.back.delete({
      where: { id },
    });
  }
}
