export class TodoDto {
    taskname: string;
  }
  export class TodoDtoResponse {
    id: number;
    taskname: string;

    constructor(id: number, taskname: string) {
      this.id = id;
      this.taskname = taskname;
    }
  }