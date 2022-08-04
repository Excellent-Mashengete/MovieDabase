import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';
import { MustMatch } from './utils/validation';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  
  Form = new FormGroup({
    fname : new FormControl(''),
    lname : new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  
  });

  submitted = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, 
    public userService : AuthenticationService, 
    private router:Router) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', Validators.required],
    },{
      validator:MustMatch("password","confirmpassword"),
    }

    );
  }
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }
   
  keyPressAlphanumeric(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onSubmit():void{
    this.submitted = true;

    if(this.Form.invalid)
    { 
      return
    }

    let user = {
      fname : this.Form.value.fname,
      lname : this.Form.value.lname,
      email: this.Form.value.email,
      password : this.Form.value.password,
    }

    this.userService.register(user).subscribe({
      next:data =>{
        console.log(data)
        this.Form.reset();
  
        this.router.navigate(['/login'])
      },
      error: err => {
 
        this.errorMessage = err.error.message;

      }
    })

  }
}
