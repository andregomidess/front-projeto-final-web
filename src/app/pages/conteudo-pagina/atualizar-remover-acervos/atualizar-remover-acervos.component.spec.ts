import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarRemoverAcervosComponent } from './atualizar-remover-acervos.component';

describe('AtualizarRemoverAcervosComponent', () => {
  let component: AtualizarRemoverAcervosComponent;
  let fixture: ComponentFixture<AtualizarRemoverAcervosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarRemoverAcervosComponent]
    });
    fixture = TestBed.createComponent(AtualizarRemoverAcervosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
