import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFavComponent } from './tela-fav.component';

describe('TelaFavComponent', () => {
  let component: TelaFavComponent;
  let fixture: ComponentFixture<TelaFavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaFavComponent]
    });
    fixture = TestBed.createComponent(TelaFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
