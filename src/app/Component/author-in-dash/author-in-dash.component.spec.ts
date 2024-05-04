import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorInDashComponent } from './author-in-dash.component';

describe('AuthorInDashComponent', () => {
  let component: AuthorInDashComponent;
  let fixture: ComponentFixture<AuthorInDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorInDashComponent]
    });
    fixture = TestBed.createComponent(AuthorInDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
