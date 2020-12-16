import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { zipCodeValidator } from '../validators';



@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  userForm:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    email:new FormControl(null,{updateOn:'change',validators:[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]}),
    // email:new FormControl(null,[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    age:new FormControl(21,[Validators.required,Validators.pattern("^[0-9]*$"),]),
    address: new FormGroup({
      city: new FormControl(null,[Validators.required]),
      pincode: new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),zipCodeValidator]),
    }),
  },{
    updateOn:'submit',
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this.userForm);
    
  }

  
  saveData():void{
    this.userForm.markAllAsTouched();
    console.log('form submitted!',this.userForm,this.userForm.valid);
    
  }

  loadData():void{
    const data = {
      name:'LOAD',
      email:'test@test.com',
      age:12,
    }
    // formInfo.setValue(data);
    this.userForm.patchValue(data);
  }

   
  get addrObj() : FormGroup {
     return this.userForm.get('address') as FormGroup;
  }
   

}
