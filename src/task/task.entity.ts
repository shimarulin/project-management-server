import { Cascade, Entity, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity } from '../base.entity';
import { Project } from '../project/project.entity';

@Entity()
export class Task extends BaseEntity {
  @Property()
  title: string;

  @Property({ nullable: true })
  estimatedTime: string;

  @ManyToOne(() => Project)
  project: Project;

  constructor(project: Project, title: string, estimatedTime?: string) {
    super();
    this.project = project;
    this.title = title;
    this.estimatedTime = estimatedTime;
  }
}
