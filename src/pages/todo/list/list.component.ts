import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

import { AboutComponent } from "../../about/about.component";

@Component({
    selector: 'todo-list',
    templateUrl: 'list.component.html'
})
export class TodoListComponent {
    newTodo: Todo = new Todo();
    constructor(public navCtrl: NavController, private todoService: TodoService) { }

    addTodo() {
        if (!this.newTodo.title.trim()) {
            return;
        }
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
    get todos() {
        return this.todoService.getAllTodos();
    }
    gotoAbout() {
      this.navCtrl.push(AboutComponent)
    }
}