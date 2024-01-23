import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {//control
    this.register = this.fb.group({
      username:['',[Validators.required,Validators.maxLength(5)]],
      password:['',[Validators.required,Validators.maxLength(8)]],
      contact:['',[Validators.required,Validators.maxLength(8)]]
    })
  }
  submit(form:FormGroup){
    console.log("Form validation",this.register.valid);
    console.log("username", this.register.get('username')?.value);
    console.log("password", this.register.get('password')?.value);
    console.log("contact", this.register.get('contact')?.value);
    
    
  }
  validatePhoneNumber(c:FormControl){
    let pregex=/^[0-9]{10}$/
    return pregex.test(c.value)?null:{
      numberInvalid:{
        message:"Invalid Phone Number"
      }
    }
  }

}

