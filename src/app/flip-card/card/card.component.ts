import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IdataCard} from "../../../shared/interface/IdataCard";
import {CardToggleTrackerService} from "../../../shared/service/cardToggleTracker.service";

const timeout = 500;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  timeout = false;

  @Input() item: IdataCard

  @Output() deleteCardEvent = new EventEmitter<IdataCard>();

  constructor(private cardToggleTrackerService: CardToggleTrackerService) {
  }

  isCardOpened(): boolean {
    return this.cardToggleTrackerService.isCardOpened(this.item.id!)
  }

  toggleCard() {
    this.timeout = true
    this.cardToggleTrackerService.toggleCard(this.item.id!)
    setTimeout(() => this.timeout = false, timeout)
  }


  handleDeleteCard() {
    this.deleteCardEvent.emit(this.item)
  }
}
