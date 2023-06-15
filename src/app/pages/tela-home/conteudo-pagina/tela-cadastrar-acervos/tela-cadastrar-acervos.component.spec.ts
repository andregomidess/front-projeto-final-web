import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastrarAcervosComponent } from './tela-cadastrar-acervos.component';

describe('TelaCadastrarAcervosComponent', () => {
  let component: TelaCadastrarAcervosComponent;
  let fixture: ComponentFixture<TelaCadastrarAcervosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaCadastrarAcervosComponent]
    });
    fixture = TestBed.createComponent(TelaCadastrarAcervosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
