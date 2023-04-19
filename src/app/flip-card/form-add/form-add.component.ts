import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IdataCard} from "../../../shared/interface/IdataCard";

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html'
})
export class FormAddComponent {

  constructor() {
  }

  @Output() addCard = new EventEmitter<IdataCard>();

  addCardForm = new FormGroup({
    title: new FormControl<string>('', {validators: Validators.required, nonNullable: true}),
    description: new FormControl<string>('', {validators: Validators.required, nonNullable: true}),
  });

  submit(): void {
    let data: IdataCard = {...this.addCardForm.value}
    this.addCard.emit(data);
    this.addCardForm.reset();
  }
}
