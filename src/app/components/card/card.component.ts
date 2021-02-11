import { Component, OnInit, Input } from '@angular/core';
import { ContentSetup } from 'src/app/model/contents.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cards: ContentSetup[] = []
  @Input() cardType: string;

  constructor() { }

  ngOnInit(): void {
    this.cardLayout(this.cardType);
  }
  cardLayout(cardType: string): void {
    switch(cardType) {
      case 'default':
          this.makeCircle(this.cards);
        break;
      case 'stick':
          this.makeSticks(this.cards);
        break;
      case 'fan':
          this.makeFan(this.cards);
        break;
    }
  }

  makeCircle(cards: ContentSetup[]): void {
    console.log('default',cards);
  }
  makeSticks(cards: ContentSetup[]): void {
    console.log('sticks',cards);
  }
  makeFan(cards: ContentSetup[]): void {
    console.log('fan',cards);
  }
}
