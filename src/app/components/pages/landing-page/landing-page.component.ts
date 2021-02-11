import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/config/projects.config'
import { ContentSetup } from 'src/app/model/contents.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public projects: ContentSetup[];
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
