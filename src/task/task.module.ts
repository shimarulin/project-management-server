import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './task.entity';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [MikroOrmModule.forFeature({ entities: [Task] })],
})
export class TaskModule {}
