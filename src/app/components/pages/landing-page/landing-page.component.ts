import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/config/projects.config'
import { ContentSetup } from 'src/app/model/contents.model';
import { ActiveProjectService } from 'src/app/services/active-project.service'
import { DeviceInfoService } from 'src/app/services/device-info.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public currentPage: string;
  public currentTitle: string;
  public projects: ContentSetup[];
  public isMobile: boolean = false;
  public hideCta: boolean = false;
  public cardTypeArray: Array<string> = [
    'default',
    'stick',
    'fan'
  ]
  public cardType: string;
  constructor(
    private activeProjectService: ActiveProjectService,
    private deviceInfoService: DeviceInfoService
  ) { 
    this.activeProjectService.currentPage().subscribe((currentPage:string) => {  
      console.log(currentPage);
      this.currentPage = currentPage;
    })
    this.activeProjectService.firstClick().subscribe((confirmation:boolean) => {  
      this.hideCta = confirmation;
    })
    this.activeProjectService.currentProject().subscribe((currentProject:number) => {  
      console.log(currentProject);
      this.currentTitle = PROJECTS[currentProject].name;
    })
    this.deviceInfoService.device.subscribe((device:string) => {  
      if (device.indexOf('mobile') > -1) {
        this.isMobile = true;
        this.activeProjectService.setPage('work')
      }
    })
  }

  ngOnInit(): void {
    this.getActiveProjects();
    this.cardType = this.cardTypeArray[0]
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
  showPage(page:string) {
    this.activeProjectService.setPage(page);
  }
}
