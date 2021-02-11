import { BehaviorSubject, Observable, of } from 'rxjs'
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout'
import { Injectable } from '@angular/core'
import { generalInfo } from '../model/general-info.model'

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  private _device$: Observable<string>
  private _orientation$ = new BehaviorSubject<string>('')
  private _deviceInfo$ = new BehaviorSubject<generalInfo.DeviceInfo>({
    name: '',
    version: null,
    os: '',
  })
  private _squished$ = new BehaviorSubject<boolean>(false)

  constructor(public breakpointObserver: BreakpointObserver) {
    this.detectBrowserVersion()
    this._device$ = Observable.create((observer) => {
      this.breakpointObserver
        .observe([
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,
          Breakpoints.XLarge,
          Breakpoints.HandsetPortrait,
          Breakpoints.HandsetLandscape,
          Breakpoints.WebLandscape,
          Breakpoints.WebPortrait,
          '(min-aspect-ratio: 29/7)',
          '(max-aspect-ratio: 1/1)',
        ])
        .subscribe((state: BreakpointState) => {
          if (
            state.breakpoints[Breakpoints.XSmall] ||
            state.breakpoints[Breakpoints.Small] ||
            state.breakpoints[Breakpoints.HandsetLandscape] ||
            state.breakpoints[Breakpoints.HandsetPortrait] ||
            state.breakpoints[Breakpoints.WebLandscape] ||
            state.breakpoints[Breakpoints.WebPortrait]
          ) {
            observer.next(this.checkDevice())
          }
          if (state.breakpoints[Breakpoints.Medium]) {
            observer.next('medium-desktop')
          }
          if (state.breakpoints[Breakpoints.Large]) {
            observer.next('large-desktop')
          }
          if (state.breakpoints[Breakpoints.XLarge]) {
            observer.next('xlarge-desktop')
          }
          if (state.breakpoints[Breakpoints.HandsetLandscape]) {
            this._orientation$.next('landscape')
          }
          if (state.breakpoints[Breakpoints.HandsetPortrait]) {
            this._orientation$.next('portrait')
          }
          if (state.breakpoints[Breakpoints.WebLandscape]) {
            this._orientation$.next('landscape')
          }
          if (state.breakpoints[Breakpoints.WebPortrait]) {
            this._orientation$.next('portrait')
          }
          if (
            state.breakpoints['(min-aspect-ratio: 29/7)'] ||
            state.breakpoints['(max-aspect-ratio: 1/1)']
          ) {
            this._squished$.next(true)
          } else {
            this._squished$.next(false)
          }
        })
    })
  }

  private isIPadPro() {
    const ratio = window.devicePixelRatio || 1
    const screen = {
      width: window.screen.width * ratio,
      height: window.screen.height * ratio,
    }
    return (
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2 &&
      ((screen.width === 2048 && screen.height === 2732) ||
        (screen.width === 2732 && screen.height === 2048) ||
        (screen.width === 1536 && screen.height === 2048) ||
        (screen.width === 2048 && screen.height === 1536))
    )
  }

  private checkDevice(): string {
    if (navigator.userAgent.match(/Tablet|iPad/i) || this.isIPadPro()) {
      return 'tablet'
    } else if (
      navigator.userAgent.match(
        /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
      )
    ) {
      if (navigator.userAgent.match('Safari') && navigator.userAgent.match('iPhone')) {
        return 'mobile-ios'
      } else {
        return 'mobile'
      }
    } else {
      return 'small-desktop'
    }
  }
  detectBrowserVersion(): void {
    let os: string = this.getOS()
    var ua = navigator.userAgent,
      tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || []
      this._deviceInfo$.next({
        name: 'IE',
        version: tem[1],
        os: os,
      })
      return
    }
    if (M[1] === 'Chrome' && ua.match(/\b(OPR|Edge)\/(\d+)/)) {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
      if (tem != null)
        var temp = tem.slice(1).join(' ').replace('OPR', 'Opera').split(' ')
      this._deviceInfo$.next({
        name: temp[0],
        version: temp[1],
        os: os,
      })
      return
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
    this._deviceInfo$.next({
      name: M[0].toLowerCase(),
      version: parseFloat(M[1]),
      os: os,
    })
  }

  getOS(): string {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Darwin', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null

    if (macosPlatforms.indexOf(platform) !== -1) {
      if (window.devicePixelRatio == 2 && navigator.maxTouchPoints > 0) {
        os = 'iPad'
      } else {
        os = 'Mac'
      }
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS'
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows'
    } else if (/Android/.test(userAgent)) {
      os = 'Android'
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux'
    }
    return os.toLowerCase()
  }

  public get device(): Observable<string> {
    return this._device$
  }
  public get deviceInfo(): Observable<any> {
    return this._deviceInfo$.asObservable()
  }

  public get orientation(): Observable<string> {
    return this._orientation$.asObservable()
  }

  public get squished(): Observable<boolean> {
    return this._squished$
  }

  public isMobile(device: string): Observable<boolean> {
    return of(device === 'mobile' || device === 'mobile-ios' || device === 'tablet')
  }

  public detectIE() {
    var ua = window.navigator.userAgent

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ')
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
    }

    var trident = ua.indexOf('Trident/')
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:')
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
    }

    var edge = ua.indexOf('Edge/')
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      return false
    }

    // other browser
    return false
  }

  public detectEdge() {
    var ua = window.navigator.userAgent

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var edge = ua.indexOf('Edge/')
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      return true
    }

    // other browser
    return false
  }
}
