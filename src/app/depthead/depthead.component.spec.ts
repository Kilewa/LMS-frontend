import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptheadComponent } from './depthead.component';

describe('DeptheadComponent', () => {
  let component: DeptheadComponent;
  let fixture: ComponentFixture<DeptheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
