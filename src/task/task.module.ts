import { forwardRef, Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { ProjectModule } from '../project/project.module';
import { Project } from '../project/project.entity';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [
    MikroOrmModule.forFeature({ entities: [Task, Project] }),
    forwardRef(() => ProjectModule),
  ],
})
export class TaskModule {}
