import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeCardComponent } from '../meme-card/meme-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MemeCardComponent
  ],
  declarations: [MemeCardComponent]
})
export class SharedModule { }
