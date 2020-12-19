import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Item } from '../model/item.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('all')
  async getAll(): Promise<Item[]> {
    return await this.chatService.findAll();
  }
}
