import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcervosComponent } from './lista-acervos.component';

describe('ListaAcervosComponent', () => {
  let component: ListaAcervosComponent;
  let fixture: ComponentFixture<ListaAcervosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAcervosComponent]
    });
    fixture = TestBed.createComponent(ListaAcervosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
