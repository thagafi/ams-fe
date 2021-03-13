import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsecComponent } from './comsec.component';

describe('ComsecComponent', () => {
  let component: ComsecComponent;
  let fixture: ComponentFixture<ComsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
