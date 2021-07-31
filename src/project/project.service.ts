import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { validate } from 'class-validator';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './project.entity';
import { Task } from '../task/task.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: EntityRepository<Project>,

    @InjectRepository(Task)
    private readonly taskRepository: EntityRepository<Task>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const { title } = createProjectDto;

    // create new project
    const project = new Project(title);
    const errors = await validate(project);

    if (errors.length > 0) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          errors: { title: 'User input is not valid.' },
        },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      await this.projectRepository.persistAndFlush(project);
      return project;
    }
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.findAll(['tasks']);
  }

  async findOne(id: number): Promise<Project> {
    return this.projectRepository.findOne(id, ['tasks']);
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    const project = await this.projectRepository.findOne(id);
    wrap(project).assign(updateProjectDto);
    await this.projectRepository.flush();

    return project;
  }

  async remove(id: number): Promise<number> {
    await this.taskRepository.nativeDelete({ project: id });

    return this.projectRepository.nativeDelete({ id });
  }
}
