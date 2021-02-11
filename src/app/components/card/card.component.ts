import { Component, OnInit, Input } from '@angular/core';
import { ContentSetup } from 'src/app/model/contents.model';
import anime from 'animejs';
import { gsap } from "gsap";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cards: ContentSetup[] = []
  @Input() cardType: string;
  private cardAnimation;
  private jumpingSquares;

  constructor() { }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.jumpingSquares = document.querySelectorAll<HTMLElement>(".card.default")
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
  jumpToCard(event, index): void {
    this.cardAnimation.pause()
    this.scaleUpCard(event, index);    
  }
  scaleUpCard(event, index: number): void {
    this.jumpingSquares.forEach((jumpingSquare, i) => {
      if (i != index) {
        jumpingSquare.classList.add('disable')
      }
    })
    this.jumpingSquares[index].classList.add('scaleUp')
  }
  restartAnimation(): void {
    this.cardAnimation.restart()
    this.jumpingSquares.forEach((jumpingSquare) => {
        jumpingSquare.classList.remove('disable', 'scaleUp')
    })
  }
  makeCircle(cards: ContentSetup[]): void {
    let interval: number = 360/(this.cards.length);
    let delay:number = 5000 / (this.cards.length*2);
    this.cardAnimation = anime.timeline({
      duration: delay,
      complete: function() { 
        this.restart(); 
      }
    });
    var translateY = -5;
    var translateX = 0.25;
    
    let i:number = 0;
    this.jumpingSquares.forEach(jumpingSquare => {
      var rotate = interval * i;
      jumpingSquare.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + 'vw) translateX(' + translateX + 'vw)';
      // this.arrOfPositions.push(rotate);
      this.cardAnimation.add({
        begin: function() {
          anime({
            targets: jumpingSquare,
            translateY: [translateY + 'vw', translateY - 1 + 'vw'],
            scale: [1, 1.25],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: this.duration * Math.PI
          });
        }
      });
      i++;
    });
  }
  makeSticks(cards: ContentSetup[]): void {
    console.log('sticks',cards);
  }
  makeFan(cards: ContentSetup[]): void {
    console.log('fan',cards);
  }
}
