import { Component } from '@angular/core';

import { Person } from './person';
import { MyDataComponent } from './my-data.component';
import { TodoList } from './todo-list';


@Component({
    selector:'my-app',
    template:`<h1></h1>
              <form>
                <input type="text" placeholder="add todos" #input />
                <button (click)=addTodos($event,input.value) type="button">Submit</button>
              </form> 
              <my-data></my-data>
              <todo-list> </todo-list>
             `
})

export class AppComponent{

   addTodos(ev,input){
       //TodoList
   }
}