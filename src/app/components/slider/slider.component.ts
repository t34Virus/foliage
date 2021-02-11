import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ContentSetup } from 'src/app/model/contents.model';
import { SwiperComponent } from 'ngx-useful-swiper';


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
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.contents)
  }
  ngAfterViewInit(): void {
    // this.thisSwiper?.swiper.slideNext()
  }
}
