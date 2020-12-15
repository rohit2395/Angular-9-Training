import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  seletedCurrencyCode = "INR";

  getCurrencyCode(code:string){
    console.log('In app component',code);
    this.seletedCurrencyCode = code;
  }
}
