import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddednewsComponent } from './addednews.component';

describe('AddednewsComponent', () => {
  let component: AddednewsComponent;
  let fixture: ComponentFixture<AddednewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddednewsComponent]
    });
    fixture = TestBed.createComponent(AddednewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
