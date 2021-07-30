import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Task {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property({ nullable: true })
  estimatedTime: string;

  constructor(title: string, estimatedTime?: string) {
    this.title = title;
    this.estimatedTime = estimatedTime;
  }
}
