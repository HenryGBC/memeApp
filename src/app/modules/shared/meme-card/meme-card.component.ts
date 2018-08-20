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
  constructor(private memeService: MemeService,
              private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
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
