import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Output() selected = new EventEmitter();

  currencyCodes:string[] = ['INR','USD', 'EUR', 'GBP','JPY'];
  constructor() { }

  ngOnInit(): void {
  }

  currencyChanged(code:string){
    console.log('In currency component',code);

    this.selected.emit(code);
    
  }

}
