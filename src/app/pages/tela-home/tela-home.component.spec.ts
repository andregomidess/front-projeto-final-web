import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHomeComponent } from './tela-home.component';

describe('TelaHomeComponent', () => {
  let component: TelaHomeComponent;
  let fixture: ComponentFixture<TelaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaHomeComponent]
    });
    fixture = TestBed.createComponent(TelaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
