import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { WorkPageComponent } from './components/pages/work-page/work-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  // { path: 'work', component: WorkPageComponent },
  // { path: 'about', component: AboutPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
