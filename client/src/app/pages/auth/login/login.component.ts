import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageService } from 'primeng/api';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;
  userToken: any;
  role: any;
  myData: any = {};
  decodedToken: any = {};
  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private auth:AuthService,
    private router:Router,  private __loader: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    });
  }

  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;//it traps errors in the form
  }

  login():void{
    // this.__loader.start();
    this.submitted = true;
    if(this.Form.invalid)
    { 
      return
    }

    let user = {  
      email: this.transform(this.Form.value.email),
      password: this.Form.value.password
    }

     if(user ){
      this.messageService.add({
        key: 'tc', severity:'success', summary: 'Success', detail: "Successfully Loggedin", life: 3000
      });
      localStorage.setItem('access_token', "drfghjk");
      this.Form.reset();
    }else{
      
      this.messageService.add({
        key: 'tc', severity:'error', summary: 'Error', detail: "Errors ", life: 3000
      });
    }

    // this.auth.login(user).subscribe({
    //   next:data => {
    //     this.Form.reset();
    //     this.messageService.add({
    //       key: 'tc', severity:'success', summary: 'Success', detail: "Successfully Loggedin", life: 3000
    //     }); 
    //   },
    //   error: err => {
    //     this.messageService.add({
    //       key: 'tc', severity:'error', summary: 'Error', detail: err.error.message, life: 3000
    //     });  
    //   }
    // })
 
  }

  transform(value:any): string {
    let first = value.toLowerCase();
    return first; 
  }
}
