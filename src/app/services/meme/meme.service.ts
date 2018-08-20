import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient,
              private router: Router,
              private utilsService: UtilsService) {

  }

  getMemes(){
    return this.http.get('./assets/data/memes.json');
  }

  updateMeme(meme){
    return this.http.put(this.utilsService.getFormatApiUrl(`meme/${meme.id}`), meme);
  }
}
