import {Injectable} from "@angular/core";

const localStorageName = 'openedCardIds'

@Injectable({providedIn: 'root'})
export class CardToggleTrackerService{
  private openedCardIds: string[]

  constructor() {
    if (localStorage.getItem(localStorageName) === null) {
      this.openedCardIds = []
      localStorage.setItem(localStorageName, JSON.stringify(this.openedCardIds))
    } else {
      this.openedCardIds = JSON.parse(localStorage.getItem(localStorageName)!)
    }
  }

  isCardOpened(cardId: string): boolean {
    return this.openedCardIds.includes(cardId)
  }

  getOpenCardIds(): string[] {
    return this.openedCardIds;
  }

  toggleCard(cardId: string) {
    if (this.openedCardIds.includes(cardId)) {
      this.openedCardIds.splice(this.openedCardIds.findIndex((i) => {
        return i === cardId;
      }), 1);
    } else {
      this.openedCardIds.push(cardId)
    }
    localStorage.setItem(localStorageName, JSON.stringify(this.openedCardIds))
    console.log(localStorage.getItem(localStorageName))
  }

  openAllCards(cardIds: string[]) {
    this.openedCardIds = cardIds
    localStorage.setItem(localStorageName, JSON.stringify(this.openedCardIds))
  }

  updateCards(cardIds: string[]) {
    let temp = this.openedCardIds
    this.openedCardIds.forEach((openedCardId) => {
      if (!cardIds.includes(openedCardId)) {
        temp.splice(temp.findIndex((i) => {
          return i === openedCardId;
        }), 1);
      }
    })

    this.openedCardIds = temp
    localStorage.setItem(localStorageName, JSON.stringify(this.openedCardIds))
  }
}
