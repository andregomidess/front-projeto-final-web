import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAcervosComponent } from './tabela-acervos.component';

describe('TabelaAcervosComponent', () => {
  let component: TabelaAcervosComponent;
  let fixture: ComponentFixture<TabelaAcervosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaAcervosComponent]
    });
    fixture = TestBed.createComponent(TabelaAcervosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
