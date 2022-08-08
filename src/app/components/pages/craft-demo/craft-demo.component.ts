import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/config/projects.config'
import { ContentSetup } from 'src/app/model/contents.model';

@Component({
  selector: 'app-craft-demo',
  templateUrl: './craft-demo.component.html',
  styleUrls: ['./craft-demo.component.scss']
})
export class CraftDemoComponent implements OnInit {
  public cardType: string = 'default';
  public projects: ContentSetup[];

  constructor() { }

  ngOnInit(): void {
  }

}
