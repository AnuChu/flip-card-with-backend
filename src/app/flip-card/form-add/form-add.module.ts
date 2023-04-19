import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormAddComponent} from './form-add.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FormAddComponent
  ],
  exports: [
    FormAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormAddModule {
}
