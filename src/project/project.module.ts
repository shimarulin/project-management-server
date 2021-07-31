import { forwardRef, Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project } from './project.entity';
import { TaskModule } from '../task/task.module';
import { Task } from '../task/task.entity';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [
    MikroOrmModule.forFeature({ entities: [Project, Task] }),
    forwardRef(() => TaskModule),
  ],
})
export class ProjectModule {}
