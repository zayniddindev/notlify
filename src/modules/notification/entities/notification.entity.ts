import { AbstractEntity } from 'src/common/database/abstract-entity.database';
import { Column, Entity, JoinColumn, ManyToMany } from 'typeorm';
import { Project } from './project.entity';

@Entity('notification')
export class Notification extends AbstractEntity {
  @Column('text')
  message: string;

  @ManyToMany(() => Project, (p: Project) => p.notifications, { onDelete: 'RESTRICT' })
  @JoinColumn()
  project: Project;
}
