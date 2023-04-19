import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import {FormAddModule} from "./form-add/form-add.module";
import {ListCardsModule} from "./list-cards/list-cards.module";



@NgModule({
  declarations: [
    FlipCardComponent
  ],
  exports: [
    FlipCardComponent
  ],
  imports: [
    CommonModule,
    FormAddModule,
    ListCardsModule
  ]
})
export class FlipCardModule { }
