import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CardEntity } from './card.entity';

@Controller()
export class AppController {
  dataCards: CardEntity[] = [
    {
      id: '1',
      title: 'Interpretation',
      description: 'The action of explaining the meaning of something.',
    },
    {
      id: '2',
      title: 'Improvisation',
      description:
        'Something that is improvised, in particular a piece of music, drama, etc. created spontaneously or without preparation.',
    },
    {
      id: '3',
      title: 'Interceptor',
      description:
        'A person or thing that stops or catches (someone or something) going from one place to another.',
    },
  ];

  constructor(private dbService: InMemoryDBService<any>) {}

  @Get()
  getAll(): CardEntity[] {
    return this.dbService.getAll();
  }

  @Post()
  create(@Body() dto: Partial<CardEntity>): CardEntity {
    return this.dbService.create(dto);
  }

  @Post('seed')
  seed(): CardEntity[] {
    this.dataCards.forEach((val) => this.dbService.create(val));
    return this.dbService.getAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.dbService.delete(id);
  }
}
