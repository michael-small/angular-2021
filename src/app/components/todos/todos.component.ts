import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos/todos.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todosService: TodosService) {

  }

  ngOnInit() {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
      console.log(this.todos);
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(td => td.id !== todo.id);
    this.todosService.deleteTodo(todo).subscribe();
  }

  editTodo(todo: Todo) {
    this.todosService.editTodo(todo).subscribe();
  }
}
