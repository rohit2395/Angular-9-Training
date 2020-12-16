import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, code: string = 'INR'): number {
    if(isNaN(value)) return null;
    // return the converted value
    return this.convertValue(code,value);
  }
  convertValue(code:string,value:number){
    switch(code){
      case 'USD':return value/=70;
      case 'EUR':return value/=89;
      case 'GBP':return value/=98;
      case 'JPY':return value/=0.71;
      default:return value;
    }
  }

}
