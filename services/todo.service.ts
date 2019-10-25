import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as uuid from 'uuid';

import Todo from '../classes/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _keyPrefix = 'Todos-'; // Easily distinguish Todos in LocalStorage (might have other stuff in storage too)

  constructor() { }

  public createTodo(todo: Todo): void {
    todo.id = uuid.v4();
    localStorage.setItem(`${this._keyPrefix}${todo.id}`, JSON.stringify(todo));
  }

  public getTodo(id: string): Observable<Todo | undefined> {
    const todoString = localStorage.getItem(`${this._keyPrefix}${id}`);
    if (!todoString) {
      return;
    }

    try {
      const todo = JSON.parse(todoString) as Todo;
      return of(todo);
    } catch (error) {
      return;
    }
  }

  public getAllTodos(): Observable<Todo[]> {
    const todos: Todo[] = [];
    Object.keys(localStorage).forEach((key: string) => {
      if (key.startsWith(this._keyPrefix)) {
        todos.push(JSON.parse(localStorage.getItem(key)) as Todo);
      }
    });
    return of(todos);
  }

  public updateTodo(todo: Todo): void {
    if (!todo.id) {
      console.error('The todo does not have an ID');
      return;
    }

    if (todo.completed) {
      todo.completedOn = new Date();
    } else {
      todo.completedOn = undefined;
    }

    localStorage.setItem(`${this._keyPrefix}${todo.id}`, JSON.stringify(todo));
  }

  public removeTodo(todo: Todo): void {
    if (!todo.id) {
      return; // Don't care, it's not in storage
    }

    localStorage.removeItem(`${this._keyPrefix}${todo.id}`);
  }

}
