import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDataComponent } from './my-data.component';
import { TodoList } from './todo-list';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent,MyDataComponent,TodoList],
    bootstrap:[AppComponent]
})

export class AppModule{
    
}