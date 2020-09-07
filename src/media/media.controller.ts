import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';


@Controller('media')
export class MediaController {
  @Get()
  findAll() {
    return 'findAll()';
  }

  @Get(':id')
  findOne(@Param('id')  id: number) {
    return `findOne(${id})`
  }

  @Post()
  create() {

  }

  @Delete()
  deleteOne () {

  }

  @Put()
  update() {

  }
}
