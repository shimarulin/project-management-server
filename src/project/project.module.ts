import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project } from './project.entity';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [MikroOrmModule.forFeature({ entities: [Project] })],
})
export class ProjectModule {}
