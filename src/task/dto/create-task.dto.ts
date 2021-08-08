import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  readonly projectId: number;

  @IsNotEmpty()
  readonly title: string;

  readonly estimatedTime?: string;

  readonly executor?: number;

  readonly estimatedTimeMin?: number;

  readonly estimatedTimeMax?: number;
}
