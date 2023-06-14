import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAcervosComponent } from './tela-acervos.component';

describe('TelaAcervosComponent', () => {
  let component: TelaAcervosComponent;
  let fixture: ComponentFixture<TelaAcervosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaAcervosComponent]
    });
    fixture = TestBed.createComponent(TelaAcervosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
