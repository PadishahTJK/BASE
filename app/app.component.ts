// // Определение компонента app.component

// // импорт декоратора Component из модуля @angular/core
// import { Component } from '@angular/core';

// // Применение декоратора Component для класса AppComponent
// // Декоратор используется для присвоения метаданных для класса AppComponent
// @Component({
//   selector: 'my-app',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
//   template: '<h1>My First Angular App</h1>' // HTML разметка определяющая представление текущего компонента
// })
// export class AppComponent {

//  } // Класс определяющий поведение компонента


import  {Component} from '@angular/core';
// import { FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
   selector: 'my-app',
   template:`
     <legend>
     <label>Enter Your Name:</label>
     <input [(ngModel)]="name"  placeholder="Your Name" >
     <h3>Welcome {{name}}</h3>
     </legend>

            `
})

export class  AppComponent {

}
