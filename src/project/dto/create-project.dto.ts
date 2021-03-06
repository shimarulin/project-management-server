import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  readonly title: string;

  readonly description?: string;

  readonly client?: string;
}
