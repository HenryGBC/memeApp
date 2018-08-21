import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { MemeService } from '../../../services/meme/meme.service';


@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.scss']
})
export class MemeCardComponent implements OnInit {

  @Input() meme;
  rating: any;
  listRating: any[];
  constructor(private memeService: MemeService,
              private _sanitizer: DomSanitizer) {
    this.listRating = ['1', '2', '3', '4', '5'];
    this.rating = {
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false
    };
  }
  ngOnInit() {
    this._mapRating();
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  setRating(value){
    this.meme.votes = value;
    this.memeService.updateMeme(this.meme)
      .subscribe(res=>{
        console.log(res);
        this._mapRating();
      }, err=>{
        console.log(err);
      });
  }

  private _mapRating(){
    if(this.meme.votes>0){
      for (const key in this.rating) {
        if (this.rating.hasOwnProperty(key)) {
            this.rating[key] = key <= this.meme.votes ? true: false;
        }
      }
    }
    console.log(this.meme.votes, this.rating);
  }

  toggleFav(memeData){
    memeData.fav = !memeData.fav;

    this.memeService.updateMeme(memeData)
      .subscribe(res=>{
        console.log(res);
      }, err=>{
        console.log(err);
        memeData.fav = !memeData.fav;
      });
  }
}
