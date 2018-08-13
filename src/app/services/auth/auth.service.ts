import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilsService } from '../utils/utils.service';

@Injectable()
export class AuthService {

  isLoggedIn: boolean;
  constructor(private http: HttpClient,
              private router: Router,
              private utilsService: UtilsService) {

  }
  signUp(user) {
    return this.http.post(this.utilsService.getFormatApiUrl('auth/signup'), user);
  }
  login(user) {
    return this.http.post(this.utilsService.getFormatApiUrl('auth/login'), user);
  }

  getToken(){
    return JSON.parse(localStorage.getItem('meme.token'));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('meme.user'));
  }

  isLogged() {
    return this.getUser() ? true : false;
  }


  logout() {
    localStorage.removeItem('meme.user');
    localStorage.removeItem('meme.token');
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
  }



}
