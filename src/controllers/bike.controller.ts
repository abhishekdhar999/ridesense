import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BikeService } from '../services/bike.service';
import { CreateBikeDto } from '../dto/create-bike.dto';

@Controller('bikes')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @Get()
  findAll() {
    return this.bikeService.findAll();
  }

  @Post()
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.create(createBikeDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBikeDto: CreateBikeDto) {
    return this.bikeService.update(id, updateBikeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bikeService.delete(id);
  }
}
