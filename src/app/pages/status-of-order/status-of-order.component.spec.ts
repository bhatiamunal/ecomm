import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfOrderComponent } from './status-of-order.component';

describe('StatusOfOrderComponent', () => {
  let component: StatusOfOrderComponent;
  let fixture: ComponentFixture<StatusOfOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOfOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
