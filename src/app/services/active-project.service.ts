import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs'
import { generalInfo } from '../model/general-info.model'

@Injectable({
  providedIn: 'root'
})
export class ActiveProjectService {
  private _currentProject$: BehaviorSubject<number>;
  public currentProject(): Observable<number> {
    return this._currentProject$.asObservable();
  }
  public setProject(projectIndex:number) {
    this._currentProject$.next(projectIndex);
  }

  private _currentPage$: BehaviorSubject<string>;
  public currentPage(): Observable<string> {
    return this._currentPage$.asObservable();
  }
  public setPage(projectIndex:string) {
    this._currentPage$.next(projectIndex);
  }
  constructor() { 
    this._currentProject$ = new BehaviorSubject<number>(0);
    this._currentPage$ = new BehaviorSubject<string>('about');
  }
}
