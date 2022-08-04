import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AuthenticationService } from '../Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  
  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  currentUser = {};
  userToken: any = {}
  submitted = false; //bpplean
  errorMessage: String = " "// declaring a string data type assigning to the error message
 
  constructor(private formBuilder: FormBuilder, 
    public auth:AuthenticationService, 
    private router:Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    });
  }
  
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;//it traps errors in the form
  }

  onSubmit():void{
    this.submitted = true;// submit when the details are true/when form is not blank

    if(this.Form.invalid)
    { 
      return
    }

    let user = {
      email: this.Form.value.email,
      password: this.Form.value.password 
    }

    console.log(user)
    this.router.navigate(['/login'])
  }  
}
