import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/config/projects.config'
import { ContentSetup } from 'src/app/model/contents.model';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {
  public projects: ContentSetup[];
  public pageConfig: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 0,
    allowTouchMove: true,
    breakpoints: {
      '@0.00': {
        // allowTouchMove: true
      },
      '@1.00': {
        // allowTouchMove: true
      },
      '@1.01': {
        // allowTouchMove: false
      }
    },
    on: {
      beforeInit: function() {
      },
      init: () => {
      },
      beforeDestroy: () => {
      },
    }
  };
  constructor() { }

  ngOnInit(): void {
    this.getActiveProjects();
  }
  getActiveProjects(): void {
    let tempArr: ContentSetup[] = [];
    PROJECTS.filter((project, index) => {
      if (project.active) {
        tempArr.push(project);
      }
    })
    this.projects = tempArr.reverse();
  }

}
