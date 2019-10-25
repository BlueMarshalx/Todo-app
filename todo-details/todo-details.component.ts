import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Todo from '../classes/Todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  public todo: Todo;

  constructor(private _todoService: TodoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => this._loadDetails(paramMap.get('id')));
  }

  private _loadDetails(todoId: string): void {
    this._todoService.getTodo(todoId).subscribe((todo: Todo) => {
      this.todo = todo;
    });
  }

}
