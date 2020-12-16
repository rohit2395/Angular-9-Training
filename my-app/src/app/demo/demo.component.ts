import { Component, Input, OnInit } from '@angular/core';
import { ConversionPipe } from '../pipes/conversion.pipe';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:[ConversionPipe],
})
export class DemoComponent implements OnInit {

  @Input() selectedCurrencyCode : string;
  
  demoData:string = 'test data';
  price = 100;
  constructor(private conversion:ConversionPipe) { }

  ngOnInit(): void {
  }


  showAlert(){
    alert('hello from angular');
  }


  calculatePrice() {
    const d = this.conversion.transform(this.price, this.selectedCurrencyCode);
    console.log('converted', d);
  }


}
