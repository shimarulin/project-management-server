import {
  Cascade,
  Collection,
  Entity,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { BaseEntity } from '../base.entity';
import { Task } from '../task/task.entity';

@Entity()
export class Project extends BaseEntity {
  @Property()
  title: string;

  @OneToMany(() => Task, (task) => task.project)
  tasks = new Collection<Task>(this);

  constructor(title: string) {
    super();
    this.title = title;
  }
}
