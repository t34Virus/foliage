import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Observable, Subscription } from 'rxjs'
import { DeviceInfoService } from 'src/app/services/device-info.service'

@Directive({
  selector: '[appBreakpointClasses]'
})
export class BreakpointClassesDirective implements OnInit{
  private deviceSubscription: Subscription
  private originalClass: string;
  private orientation: string;
  private oldOrientation: string;

  constructor(
    private renderer: Renderer2, 
    private hostElement: ElementRef,
    private deviceInfoService: DeviceInfoService) {
    
    }
    ngOnInit(): void {
    this.originalClass = this.hostElement.nativeElement.classList.value;
    this.deviceSubscription = this.deviceInfoService.device.subscribe(
      (device: string) => {

        this.hostElement.nativeElement.classList = this.originalClass;
        if (this.orientation) {
          this.oldOrientation = this.orientation
        }
        if (window.innerHeight >= window.innerWidth) {
          this.orientation = 'portrait';
        } else {
          this.orientation = 'landscape';
        }

        device = `${device}-${this.orientation}`
        
        this.renderer.addClass(this.hostElement.nativeElement, device)
        
        if (device.indexOf('ios') > -1) {
          this.renderer.addClass(this.hostElement.nativeElement, window.devicePixelRatio.toString())
        }
      
      }
    )
  }
}
