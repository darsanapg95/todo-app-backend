import { Injectable } from '@nestjs/common';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  private tasks: TodoDto[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(todoDto: TodoDto) {
    this.tasks.push(todoDto);
    return todoDto;
  }
}
