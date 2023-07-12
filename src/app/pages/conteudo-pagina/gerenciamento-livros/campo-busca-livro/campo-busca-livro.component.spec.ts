import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoBuscaLivroComponent } from './campo-busca-livro.component';

describe('CampoBuscaLivroComponent', () => {
  let component: CampoBuscaLivroComponent;
  let fixture: ComponentFixture<CampoBuscaLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoBuscaLivroComponent]
    });
    fixture = TestBed.createComponent(CampoBuscaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
