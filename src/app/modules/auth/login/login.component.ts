import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showErrors: boolean;
  showErrorBack: boolean;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router:Router) {
    this._buildForm();
    this.showErrors = false;
    this.showErrorBack = false;
  }
  ngOnInit() {
  }


  submitForm(form: any){
    console.log(form.valid);
    if (form.valid) {
      console.log(form.value);
      this.showErrors = false;
      localStorage.setItem('meme.user', JSON.stringify(form.value));
      localStorage.setItem('meme.token', '1238018ASDHSAD12121');
      this.router.navigateByUrl('/home');
      // this.authService.login(form.value)
      //   .subscribe((res:any)=>{
      //       localStorage.setItem('meme.token', res.token);
      //       this.router.navigateByUrl('/home');
      //   }, err=>{
      //     console.log(err)
      //     this.showErrorBack = false;
      //   });
    } else {
      this.showErrors = true;
    }
  }

  private _buildForm(){
    this.loginForm = this.formBuilder.group({
      email: ['',   [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
