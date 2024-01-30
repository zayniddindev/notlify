import { AbstractEntity } from 'src/common/database/abstract-entity.database';
import { Column, Entity, OneToMany } from 'typeorm';
import { Notification } from './notification.entity';

@Entity('project')
export class Project extends AbstractEntity {
  @Column('varchar')
  uid: string;

  @Column('varchar')
  tg_group_id: string;

  @Column('text')
  tg_bot_token: string;

  @OneToMany(() => Notification, (n: Notification) => n.project)
  notifications: Notification[];
}
