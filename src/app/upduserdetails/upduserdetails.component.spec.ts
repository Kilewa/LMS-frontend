import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpduserdetailsComponent } from './upduserdetails.component';

describe('UpduserdetailsComponent', () => {
  let component: UpduserdetailsComponent;
  let fixture: ComponentFixture<UpduserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpduserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpduserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
