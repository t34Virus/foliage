import { Component, OnInit, Input, ViewChild, ElementRef, Pipe, PipeTransform } from '@angular/core';
import { ContentSetup } from 'src/app/model/contents.model';
import { DomSanitizer } from '@angular/platform-browser';
import anime from 'animejs';
import {Router} from '@angular/router';
import { gsap } from "gsap";
import { ActiveProjectService } from 'src/app/services/active-project.service'
import { PROJECTS } from 'src/app/config/projects.config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

  export class CardComponent implements OnInit {
  @ViewChild('exitCard') exitCard: ElementRef;
  @ViewChild('centerText') centerText: ElementRef;
  @ViewChild('centerVideo') centerVideo: ElementRef;


  @Input() cards: ContentSetup[] = []
  @Input() cardType: string;
  public mediaSrc: Array<string>;
  public targetVideoSrc: string;
  public cardAnimation;
  private jumpingSquares;
  private demoVideos;
  private cardActive: boolean = false;
  private firstLanding: boolean = true;
  public currentTitle: string;
  private cardActiveTimeout: ReturnType<typeof setTimeout>;

  constructor(
    private sanitizer: DomSanitizer,
    private route:Router,
    private activeProjectService: ActiveProjectService
    ) {
      // this.activeProjectService.currentPage().subscribe((currentPage:string) => {  
      //   if (currentPage == 'home' && !this.firstLanding) {
      //     this.restartAnimation();
      //   }
      //   if (this.firstLanding) {
      //     this.firstLanding = false;
      //   }
      // })
     }

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {

    this.jumpingSquares = document.querySelectorAll<HTMLElement>(".card.default")
    this.demoVideos = document.querySelectorAll<HTMLVideoElement>(".demo-video");
    this.cardLayout(this.cardType);
    this.demoVideos.forEach(demoVideo => {
      demoVideo.muted = true;
    })
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
    // this.activeProjectService.setProject(index);
    console.log(PROJECTS[index], index);
    if (this.cardActive) {
      // this.route.navigate(['/work'],{queryParams: {slide: index}})
      this.activeProjectService.setProject(index);
      this.activeProjectService.setPage('work');
    }
  }
  scaleUpCard(event, index: number): void {
    this.exitCard.nativeElement.classList.add('show');
    this.jumpingSquares.forEach((jumpingSquare, i) => {
      if (i != index) {
        jumpingSquare.classList.add('disable')
      }
    })
    this.jumpingSquares[index].classList.add('scaleUp')
    this.cardActiveTimeout = setTimeout(() => {
      this.cardActive = true;
    },1500)
  }
  restartAnimation(): void {
    clearTimeout(this.cardActiveTimeout)
    this.exitCard.nativeElement.classList.remove('show');
    this.cardAnimation.play()
    this.jumpingSquares.forEach((jumpingSquare) => {
        jumpingSquare.classList.remove('disable', 'scaleUp')
    })
    this.cardActive = false;
    this.activeProjectService.setPage('home');
  }
  playDemo(event, index: number): void {
    // if (!this.cardActive) {
    //   event.target.load();
    //   event.target.play();
    // }
    // this.centerVideo.nativeElement.src = event.target.src;
    // this.centerVideo.nativeElement.load()
    // this.centerVideo.nativeElement.play()
    this.currentTitle = event.target.value;
    this.centerText.nativeElement.classList.add('show');
  }
  stopDemo(event, index: number): void {
    // if (!this.cardActive) {
    //   event.target.pause();
    // }

    this.centerText.nativeElement.classList.remove('show');
    // this.centerVideo.nativeElement.pause()
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
      let titles = document.querySelectorAll<HTMLElement>(".text")
      titles[i].style.transform = 'rotate(' + (-rotate) + 'deg)';
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
