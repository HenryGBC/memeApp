import { Component, OnInit } from '@angular/core';
import { MemeService } from '../../services/meme/meme.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  memes: any[];
  constructor(private memeService:MemeService) { }

  ngOnInit() {
    this._getMemes();
  }
  private _getMemes(){
    this.memeService.getMemes()
      .subscribe((res:any)=>{
        this.memes = res;
        console.log(this.memes);
      }, err=>{
        console.log(err);
      });
  }

}
