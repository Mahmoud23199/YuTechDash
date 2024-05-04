import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDaseComponent } from './admin-dase.component';

describe('AdminDaseComponent', () => {
  let component: AdminDaseComponent;
  let fixture: ComponentFixture<AdminDaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDaseComponent]
    });
    fixture = TestBed.createComponent(AdminDaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
