import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MustMatch } from './confirmPassword/validation';
import { MessageService } from 'primeng/api';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  Form = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl('')
  });

  submitted = false;
  userToken: any;
  role: any;
  myData: any = {};
  decodedToken: any = {};
  constructor(private formBuilder: FormBuilder, private messageService: MessageService,
    private router:Router, private auth:AuthService, private __loader: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', Validators.required],
    },
    {//Compares the two passwprds if they match
      validator:MustMatch("password","confirmpassword"),
    });
  }

  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;//it traps errors in the form
  }

  register(){
    // this.__loader.start();
    this.submitted = true;
    if(this.Form.invalid)
    { 
      return
    }

    let user = { 
      firstname: this.Form.value.fname,
      lastname: this.Form.value.lname,
      email: this.transform(this.Form.value.email),
      cellno: this.Form.value.phone,
      password: this.Form.value.password
    }



    this.auth.register(user).subscribe({
      next:data => {
        this.Form.reset();
        this.messageService.add({
          key: 'tc', severity:'success', summary: 'Success', detail: "Successfully Registered", life: 3000
        }); 
      },
      error: err => {
        this.messageService.add({
          key: 'tc', severity:'error', summary: 'Error', detail: err.error.message, life: 3000
        });  
      }
    })
  }

  transform(value:any): string {
    let first = value.toLowerCase();
    return first; 
  }
}