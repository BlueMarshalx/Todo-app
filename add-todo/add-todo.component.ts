import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';
import Todo from '../classes/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  public name = '';
  public description = '';

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  public addTodo(): void {
    this._todoService.createTodo(new Todo(this.name, this.description));
    this.name = '';
    this.description = '';
  }

}
