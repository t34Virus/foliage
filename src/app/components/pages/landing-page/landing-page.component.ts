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
  public cardTypeArray: Array<string> = [
    'default',
    'stick',
    'fan'
  ]
  public cardType: string;
  constructor() { }

  ngOnInit(): void {
    this.getActiveProjects();
    // this.cardType = this.cardTypeArray[this.getRandomInt(this.cardTypeArray.length)];
    this.cardType = this.cardTypeArray[2]
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
  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
