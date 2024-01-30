import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendTgMessageDto } from './dtos/notification.dto';
import { CoreApiResponse } from 'src/common/http/response.http';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async sendTgMessage(@Body() dto: SendTgMessageDto) {
    return CoreApiResponse.success(await this.notificationService.sendTgMessage(dto));
  }
}
