import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TodoService as TodoService } from '../services/todo.service';
import Todo from '../classes/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todos: Todo[];

  private _destroy$ = new Subject<void>();

  constructor(public todoService: TodoService) {
    todoService.getAllTodos()
      .pipe(takeUntil(this._destroy$))
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
      });
  }

  ngOnInit() {
  }

  toggleChecked(todo: Todo, event: any): void {
    todo.completed = event.srcElement.checked;
    this.todoService.updateTodo(todo);
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeTodo(todo);
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
