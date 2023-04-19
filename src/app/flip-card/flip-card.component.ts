import {Component, OnInit} from '@angular/core';
import {IdataCard} from "../../shared/interface/IdataCard";
import {PurchasesApiService} from "../../shared/service/cardApi.service";
import {CardToggleTrackerService} from "../../shared/service/cardToggleTracker.service";

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html'
})
export class FlipCardComponent implements OnInit {

  data!: IdataCard[]

  constructor(private purchasesApiService: PurchasesApiService, private cardToggleTrackerService: CardToggleTrackerService) {
  }

  ngOnInit(): void {
    this.purchasesApiService.getAll().subscribe((cards) => {
      this.data = cards;
      const cardIds: string[] = cards.map((card) => card.id!)
      this.cardToggleTrackerService.updateCards(cardIds)
    })
  }

  openAllCards() {
    const cardIds: string[] = this.data.map((card) => card.id!)
    this.cardToggleTrackerService.openAllCards(cardIds)
  }

  addCard(idataCard: IdataCard) {
    this.purchasesApiService.add(idataCard).subscribe((card) => {
      this.data.push(card)
    })
  }

  deleteCard(idataCard: IdataCard) {
    this.purchasesApiService.delete(idataCard.id!).subscribe(() => {
      this.data.splice(this.data.findIndex(function (i) {
        return i.id === idataCard.id;
      }), 1);
    })
  }
}
