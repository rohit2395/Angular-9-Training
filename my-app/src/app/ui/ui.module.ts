import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective } from './directives/column.directive';
import { RowDirective } from './directives/row.directive';



@NgModule({
  declarations: [ColumnDirective, RowDirective],
  imports: [
    CommonModule
  ],
  exports: [RowDirective,ColumnDirective]
})
export class UiModule { }
