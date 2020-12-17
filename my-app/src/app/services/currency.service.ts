import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private _currencyCode: string = 'INR';
  private currencySubject = new BehaviorSubject<string>(this._currencyCode);
  currency$ = this.currencySubject.asObservable(); // subscribe to this
  
  constructor() { }

  updateCurrency(code: string) {
    this._currencyCode = code;
    this.currencySubject.next(this._currencyCode); // giving notification
  }

}
