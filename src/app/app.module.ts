import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component'

import { BreakpointClassesDirective } from './directives/breakpoint-classes.directive';
import { WorkPageComponent } from './components/pages/work-page/work-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BreakpointClassesDirective,
    WorkPageComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
