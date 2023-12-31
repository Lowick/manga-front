import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pages404Component } from './pages404.component';

describe('Pages404Component', () => {
  let component: Pages404Component;
  let fixture: ComponentFixture<Pages404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pages404Component]
    });
    fixture = TestBed.createComponent(Pages404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
