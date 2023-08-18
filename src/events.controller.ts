import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';

@Controller('/events')
export class EventController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'first event' },
      { id: 2, name: 'second event' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return {
      id,
      name: 'first event',
    };
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    return input;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input) {
    return input;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {}
}
