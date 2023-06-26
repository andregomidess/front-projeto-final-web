import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastrarComponent } from './tela-cadastrar.component';

describe('TelaCadastrarComponent', () => {
  let component: TelaCadastrarComponent;
  let fixture: ComponentFixture<TelaCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaCadastrarComponent]
    });
    fixture = TestBed.createComponent(TelaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
