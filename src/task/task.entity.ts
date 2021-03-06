import { Cascade, Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from '../base.entity';
import { Project } from '../project/project.entity';

@Entity()
export class Task extends BaseEntity {
  @Property()
  title: string;

  @Property({ nullable: true })
  estimatedTime: string;

  @Property({ nullable: true })
  executor: number;

  @Property({ nullable: true })
  estimatedTimeMin: number;

  @Property({ nullable: true })
  estimatedTimeMax: number;

  @ManyToOne(() => Project)
  project: Project;

  constructor(
    project: Project,
    title: string,
    estimatedTime?: string,
    executor?: number,
    estimatedTimeMin?: number,
    estimatedTimeMax?: number,
  ) {
    super();
    this.project = project;
    this.title = title;
    this.estimatedTime = estimatedTime;
    this.executor = executor;
    this.estimatedTimeMin = estimatedTimeMin;
    this.estimatedTimeMax = estimatedTimeMax;
  }
}
