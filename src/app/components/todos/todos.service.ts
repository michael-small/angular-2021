import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from 'src/app/models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=10';

  constructor(private http: HttpClient ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limit}`);
  }
}
