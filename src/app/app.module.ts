import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component'

import { BreakpointClassesDirective } from './directives/breakpoint-classes.directive';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BreakpointClassesDirective
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
