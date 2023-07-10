import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCadastroComponent } from './input-cadastro.component';

describe('InputCadastroComponent', () => {
  let component: InputCadastroComponent;
  let fixture: ComponentFixture<InputCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputCadastroComponent]
    });
    fixture = TestBed.createComponent(InputCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
