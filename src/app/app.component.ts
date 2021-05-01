import { Component, OnInit } from '@angular/core';
import { TodosService } from './components/todos/todos.service';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Michael Small\'s Angular 2021';
  todos: Todo[];

  constructor(private todoService: TodosService) {

  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}
