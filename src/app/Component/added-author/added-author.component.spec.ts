import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedAuthorComponent } from './added-author.component';

describe('AddedAuthorComponent', () => {
  let component: AddedAuthorComponent;
  let fixture: ComponentFixture<AddedAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedAuthorComponent]
    });
    fixture = TestBed.createComponent(AddedAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
