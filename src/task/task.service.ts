import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { validate } from 'class-validator';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';
import { Project } from '../project/project.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: EntityRepository<Task>,

    @InjectRepository(Project)
    private readonly projectRepository: EntityRepository<Project>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const {
      projectId,
      title,
      estimatedTime,
      executor,
      estimatedTimeMin,
      estimatedTimeMax,
    } = createTaskDto;
    const project = await this.projectRepository.findOne({ id: projectId });

    if (!project) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          errors: { projectId: 'User input is not valid.' },
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // create new task
    const task = new Task(
      project,
      title,
      estimatedTime,
      executor,
      estimatedTimeMin,
      estimatedTimeMax,
    );
    const errors = await validate(task);

    if (errors.length > 0) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          errors: { title: 'User input is not valid.' },
        },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      await this.taskRepository.persistAndFlush(task);
      return task;
    }
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async findOne(id: number): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskRepository.findOne(id);
    wrap(task).assign(updateTaskDto);
    await this.taskRepository.flush();

    return task;
  }

  async remove(id: number): Promise<number> {
    return this.taskRepository.nativeDelete({ id });
  }
}
