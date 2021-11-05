import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ContentSetup } from 'src/app/model/contents.model';
import { SwiperComponent } from 'ngx-useful-swiper';
import  Player  from '@vimeo/player';
import { Observable, Subscription } from 'rxjs'
import { ActiveProjectService } from 'src/app/services/active-project.service';

// import SwiperCore from 'swiper/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild('thisSwiper',{static: false}) thisSwiper: SwiperComponent;
  @Input() contents: ContentSetup[] = []
  @Input() slideCount: number;
  @Input() config: SwiperOptions;
  private player: Player;
  private playerArray: Array<any>;
  private videoPlaybackTimer: ReturnType<typeof setTimeout>;

  constructor(
    private activeProjectService: ActiveProjectService) { 

    }
  
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.newPlayers();
    console.log(this.playerArray);
    this.playerArray.filter((player, index) => {
      player.on('play', function() {
        console.log(`played video ${player.element.id}`);
      });
    })

    this.thisSwiper.swiper.on('slideChange',() => {
      clearTimeout(this.videoPlaybackTimer);
      this.playerArray.filter((player, index) => { 
        player.pause();
      })
      this.videoPlaybackTimer = setTimeout(() => {
        // this.playerArray[this.thisSwiper.swiper.realIndex].play();
      },250)
    })
    this.activeProjectService.currentProject().subscribe((currentProjectIndex:number) => {  
      this.thisSwiper.swiper.slideToLoop(currentProjectIndex,500)
    })
  }
   newPlayers(): void {
    let tempArr: Array<any> = [];
    this.contents.filter((content, index) => {
      if (content.embed.split('|')[0] == 'vid') {
        let embedPath: Array<string> = content.embed.split('video/')
        let player = new Player(`video_${embedPath[1]}`, {
          id: parseInt(embedPath[1])
        })
        player.setLoop(true)
        tempArr.push(player);
      }
    })
    this.playerArray = tempArr;
  }
}
