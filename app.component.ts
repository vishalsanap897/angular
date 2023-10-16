import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  // form:any=FormGroup;
  // constructor(private fb:FormBuilder){
  //   this.form=this.fb.group({
  //     name:['',[Validators.required]],
  //     lastname:['',[Validators.required]],
  //     email:['',[Validators.required,Validators.email]],
  //     password:['',[Validators.required,Validators.minLength(8)]],
  //     confirmPassword:['',[Validators.required,Validators.minLength(8)]]

  //   })
  // }

  // get name(){
  //   return this.form.get('name')
  // }
  // get lastname(){
  //   return this.form.get('lastname')
  // }
  // get email(){
  //   return this.form.get('email')
  // }
  // get password(){
  //   return this.form.get('password')
  // }
  // get confirmPassword(){
  //   return this.form.get('confirmPassword')
  // }

  // submit(){
  //   console.log(this.form.value);
  // }



  isShow:boolean=false;
sub(){
  this.isShow=true
}








  data = [{
    "id": 1,
    "name": "john Doe",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "age": 35
  },
  {
    "id": 4,
    "name": "Alice Brown",
    "age": 30
  },
  ]



}
