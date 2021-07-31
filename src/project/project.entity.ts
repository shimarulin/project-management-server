import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '../base.entity';

@Entity()
export class Project extends BaseEntity {
  @Property()
  title: string;

  constructor(title: string) {
    super();
    this.title = title;
  }
}
