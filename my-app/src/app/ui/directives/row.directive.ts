import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRow]'
})
export class RowDirective {

  constructor( private eRef:ElementRef) { 
    this.addClass();
  }

  addClass() {
    const divElement: HTMLDivElement = this.eRef.nativeElement;
    divElement.className = 'row';
  }


}
