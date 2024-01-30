import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { SendTgMessageDto } from './dtos/notification.dto';
import { HttpError } from 'src/common/http/error.http';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Project) private readonly projectRepo: Repository<Project>,
    @InjectRepository(Notification) private readonly notificationRepo: Repository<Notification>,
  ) {}

  async sendTgMessage(dto: SendTgMessageDto) {
    const project = await this.projectRepo.findOneBy({ uid: dto.uid });
    if (!project) HttpError({ code: 'WRONG_UID' });
    const bot = new TelegramBot(project.tg_bot_token);
    try {
      await bot.sendMessage(project.tg_group_id, dto.message, { parse_mode: 'HTML' });
    } catch (error) {
      console.log(JSON.stringify(await bot.getUpdates({ limit: 1 }), null, 2));
      throw 'Failure message sending';
    }
    await this.notificationRepo.save(
      this.notificationRepo.create({
        message: dto.message,
        project,
      }),
    );

    return 'Message sent successfully!';
  }
}
