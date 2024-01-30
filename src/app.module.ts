import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db_config } from './common/database/config.database';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [TypeOrmModule.forRoot(db_config), NotificationModule],
})
export class AppModule {}
