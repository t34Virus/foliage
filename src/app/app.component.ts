import { Component, OnInit } from '@angular/core';
import { PROJECTS } from './config/projects.config'
import { ContentSetup } from './model/contents.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private projects: ContentSetup[] = PROJECTS;
  title = 'foliage';
  
  ngOnInit(): void {
    console.log(this.projects);
  }
}
