import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../model/item.entity';

@Injectable()
export class ChatService {
  constructor(@InjectRepository(Item) private itemRepo: Repository<Item>) {}

  findAll(): Promise<Item[]> {
    return this.itemRepo.find();
  }
}
