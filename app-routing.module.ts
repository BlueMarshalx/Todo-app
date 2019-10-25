import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AddTodoComponent
  },
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'details/:id',
    component: TodoDetailsComponent
  },
  {
    path: '**', // Page not found
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
