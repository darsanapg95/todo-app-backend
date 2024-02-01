import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTasks() {
    return this.todoService.getAllTasks();
  }

  @Post()
  createTask(@Body() todoDto: TodoDto) {
    return this.todoService.createTask(todoDto);
  }
}
