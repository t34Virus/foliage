import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftDemoComponent } from './craft-demo.component';

describe('CraftDemoComponent', () => {
  let component: CraftDemoComponent;
  let fixture: ComponentFixture<CraftDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
