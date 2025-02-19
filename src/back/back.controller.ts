import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackService } from './back.service';
import { CreateBackDto } from './dto/create-back.dto';
import { UpdateBackDto } from './dto/update-back.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('back')
@ApiTags('back')
export class BackController {
  constructor(private readonly backService: BackService) {}

  @Post()
  create(@Body() createBackDto: CreateBackDto) {
    return this.backService.create(createBackDto);
  }

  @Get()
  findAll() {
    return this.backService.findAllAlive();
  }

  @Get('estado') //localhost:3000/back/estado
  findAllEstado() {
    return this.backService.findAllEstado();
  }

  @Get(':id') //localhost:3000/back/1
  findOne(@Param('id') id: string) {
    return this.backService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, 
  @Body() updateBackDto: UpdateBackDto,
  ) {
    return this.backService.update(+id, updateBackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backService.remove(+id);
  }
}
