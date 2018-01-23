import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css']
})
export class CardStackComponent implements OnInit {

  emptyCard = this.assetsBasePath() + 'assets/decks/torgDramaDeck/empty.png';
  cardPathBegin = this.assetsBasePath() + 'assets/decks/torgDramaDeck/card';
  cardPathEnd = '.png';
  backside = this.assetsBasePath() + 'assets/decks/torgDramaDeck/backside.png';
  drawnCard = this.emptyCard;
  cardStack = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

  drawCard() {

    if (this.cardStack.length < 1) {
      return;
    }

    console.log('setting temporarily empty card...');
    this.drawnCard = this.emptyCard;
    const index = Math.floor(Math.random() * this.cardStack.length);
    const drawnCardId = this.cardStack[index];
    console.log('drawing a card ' + drawnCardId + '...');
    this.drawnCard = this.cardPathBegin + drawnCardId + this.cardPathEnd;
    this.cardStack.splice(index, 1);

    if (this.cardStack.length < 1) {
      this.backside = this.emptyCard;
    }
  }

  assetsBasePath() {
    if (environment.production) {
      return 'torgcards/';
    }
    return '';
  }

  sleep(milliseconds) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

}
