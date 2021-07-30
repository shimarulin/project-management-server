import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [MikroOrmModule.forRoot(), ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
