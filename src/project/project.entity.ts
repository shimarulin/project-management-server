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

  @Property()
  description: string;

  @Property()
  client: string;

  @OneToMany(() => Task, (task) => task.project)
  tasks = new Collection<Task>(this);

  constructor(title: string, description?: string, client?: string) {
    super();
    this.title = title;
    this.description = description;
    this.client = client;
  }
}
