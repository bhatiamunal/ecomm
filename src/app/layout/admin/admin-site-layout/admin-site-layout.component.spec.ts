import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteLayoutComponent } from './admin-site-layout.component';

describe('AdminSiteLayoutComponent', () => {
  let component: AdminSiteLayoutComponent;
  let fixture: ComponentFixture<AdminSiteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSiteLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
