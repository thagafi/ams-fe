import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranteesComponent } from './grantees.component';

describe('GranteesComponent', () => {
  let component: GranteesComponent;
  let fixture: ComponentFixture<GranteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
