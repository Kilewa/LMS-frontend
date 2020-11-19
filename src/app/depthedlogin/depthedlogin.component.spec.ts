import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepthedloginComponent } from './depthedlogin.component';


describe('DepthedloginComponent', () => {
  let component: DepthedloginComponent;
  let fixture: ComponentFixture<DepthedloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepthedloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepthedloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
