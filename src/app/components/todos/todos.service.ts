import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Todo } from 'src/app/models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=10';

  constructor(private http: HttpClient ) { }

  // CRUD options

  // ~TODO~
  //createTodo(todo: Todo)

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limit}`);
  }

  // ~TODO~
  //updateTodo(todo: Todo)

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  editTodo(todo: Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }
}
