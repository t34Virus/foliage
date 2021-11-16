import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ContentSetup } from 'src/app/model/contents.model';
import { SwiperComponent } from 'ngx-useful-swiper';
import  Player  from '@vimeo/player';
import { Observable, Subscription } from 'rxjs'
import { ActiveProjectService } from 'src/app/services/active-project.service';
import { DeviceInfoService } from 'src/app/services/device-info.service'

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
  private orientation: string;
  private oldOrientation: string;
  public deviceType: string;
  constructor(
    private activeProjectService: ActiveProjectService,
    private deviceInfoService: DeviceInfoService
    ) { 

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
    this.deviceInfoService.device.subscribe((device:string) => {  
      // this.thisSwiper.swiper.slideToLoop(currentProjectIndex,500)
      // console.log(device);
      this.deviceType = device;
      if (this.orientation) {
        this.oldOrientation = this.orientation
      }
      if (window.innerHeight >= window.innerWidth) {
        this.orientation = 'portrait';
        // this.thisSwiper.swiper.slides
        if (device.indexOf('mobile') > -1) {
          // this.thisSwiper.swiper.destroy(false, true)
          this.thisSwiper.swiper.changeDirection('vertical', true)
        }
      } else {
        this.orientation = 'landscape';
        this.thisSwiper.swiper.changeDirection('horizontal', true)
      }
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
