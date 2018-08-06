import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class UtilsService {

  constructor() { }

  getFormatApiUrl(path){
    return `${environment.baseUrl}/api/${path}`;
  }

  getHeaders() {
    const token = JSON.parse(localStorage.getItem('legal.token'));
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);

    return {headers: headers};
  }
}
