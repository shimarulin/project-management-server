import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [MikroOrmModule.forRoot(), ProjectModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
