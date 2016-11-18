import { Component , Input , Output} from '@angular/core';

import {  } from './person';

@Component({
    selector:'my-data',
    template:`<div [contentEditable]="setContentEdit" >
                From mydata Component
              </div>
              <button (click)="fireMe()" >ChangeEdit</button><br>
             {{inputVal}}<br>
              Enter Something:<input type="text" [(ngModel)]="inputVal">
              `
})

export class MyDataComponent{
   //@Output()
   setContentEdit:Boolean = false;
   iVal:string

   //@Input()
//    person:Person
   inputVal:string;

   fireMe():void{
       this.setContentEdit = this.setContentEdit?false:true;
       this.inputVal = 'clicked';
   }
}
