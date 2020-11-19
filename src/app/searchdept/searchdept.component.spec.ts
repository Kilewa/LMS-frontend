import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdeptComponent } from './searchdept.component';

describe('SearchdeptComponent', () => {
  let component: SearchdeptComponent;
  let fixture: ComponentFixture<SearchdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
