import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveData(formInfo:NgForm):void{
    console.log('form submitted!',formInfo.value,formInfo.valid);
    
  }

  loadData(formInfo:NgForm):void{
    const data = {
      // name:'TEST',
      age:12,
    }
    // formInfo.setValue(data);
    formInfo.form.patchValue(data);
  }

}
