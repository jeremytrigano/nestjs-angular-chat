import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatController } from './chat.controller';
import { Item } from '../model/item.entity';
import { ChatService } from './chat.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ChatGateway, ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
