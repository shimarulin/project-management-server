import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '../base.entity';

@Entity()
export class Task extends BaseEntity {
  @Property()
  title: string;

  @Property({ nullable: true })
  estimatedTime: string;

  constructor(title: string, estimatedTime?: string) {
    super();
    this.title = title;
    this.estimatedTime = estimatedTime;
  }
}
