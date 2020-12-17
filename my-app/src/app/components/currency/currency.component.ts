import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Output() selected = new EventEmitter();

  currencyCodes:string[] = ['INR','USD', 'EUR', 'GBP','JPY'];
  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
  }

  currencyChanged(code:string){
    console.log('In currency component',code);
    this.currencyService.updateCurrency(code);
    // this.selected.emit(code);
    
  }

}
