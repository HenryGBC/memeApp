import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  showErrors: boolean;
  showErrorBack: boolean;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
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
      this.authService.signUp(form.value)
        .subscribe(res=>{
          this._login(form.value)
        }, err=>{
          console.log(err)
          this.showErrorBack = false;
        });
    } else {
      this.showErrors = true;
    }
  }

  private _login(value){
    const data = {
      email: value.email,
      password: value.password
    };
    this.authService.login(data)
      .subscribe(res=>{
        console.log(res);
        // setToken in local Storage and route navigate for home section
      }, err=>{
        console.log(err)
      });
  }
  private _buildForm(){
    this.signUpForm = this.formBuilder.group({
      first_name: ['',   [Validators.required] ],
      last_name: ['',   [Validators.required] ],
      email: ['',   [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)] ],
    });

    console.log(this.signUpForm);
  }
}
