import { Component } from '@angular/core';

import { TODOS } from './mockTodos';

@Component({
    selector:'todo-List',
    template: `
        <ul>
          <li *ngFor="let i of todos">{{i}}</li>
        </ul>
     `
})

export class TodoList{
     public todos = TODOS;

    addTodo(ev,input){
       ev.preventDefault()
       console.log(input)
       TODOS.push(input)
   }
}