import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreakpointClassesDirective } from './directives/breakpoint-classes.directive';

@NgModule({
  declarations: [
    AppComponent,
    BreakpointClassesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
