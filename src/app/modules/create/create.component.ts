import { Component, OnInit } from '@angular/core';
import { MemeService } from '../../services/meme/meme.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  templates: any[];
  selected: any;
  textTop: string;
  textBottom: string;

  constructor(private memeService: MemeService) {
    this.templates = [];
    this.textTop = '';
    this.textBottom = '';
  }

  ngOnInit() {
    this._getTemplates();

  }
  selectTemplate(template){
    this.selected = template;
    console.log(this.selected);
  }
  private _getTemplates(){
    this.memeService.getTemplates()
      .subscribe((res:any)=>{
        this.templates = res.data.memes;
        this.selected = this.templates[0];

      }, err=>{
        console.log(err);
      });
  }
}
