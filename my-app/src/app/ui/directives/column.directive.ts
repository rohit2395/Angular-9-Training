import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColumn]'
})
export class ColumnDirective implements OnChanges{

  @Input() appColumn:string|number;

  constructor(private eRef:ElementRef) { 
    // this.addClass();
  } 


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes && changes.appColumn && changes.appColumn.currentValue){
      this.addClass();
    }
  }

  
  addClass() {
    const size = this.appColumn || 12;
    const divElement: HTMLDivElement = this.eRef.nativeElement;
    divElement.className = `col-md-${size}`;
  }


}
