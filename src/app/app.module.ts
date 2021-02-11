import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component'

import { BreakpointClassesDirective } from './directives/breakpoint-classes.directive';
import { WorkPageComponent } from './components/pages/work-page/work-page.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { CardComponent } from './components/card/card.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BreakpointClassesDirective,
    WorkPageComponent,
    LandingPageComponent,
    AboutPageComponent,
    CardComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
