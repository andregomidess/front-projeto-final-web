import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoLivrosComponent } from './gerenciamento-livros.component';

describe('GerenciamentoLivrosComponent', () => {
  let component: GerenciamentoLivrosComponent;
  let fixture: ComponentFixture<GerenciamentoLivrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciamentoLivrosComponent]
    });
    fixture = TestBed.createComponent(GerenciamentoLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
