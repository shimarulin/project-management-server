import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import crypto from "crypto";

@Entity()
export class Project {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
