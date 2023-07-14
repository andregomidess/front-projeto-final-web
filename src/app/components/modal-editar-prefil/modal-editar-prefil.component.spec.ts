import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPrefilComponent } from './modal-editar-prefil.component';

describe('ModalEditarPrefilComponent', () => {
  let component: ModalEditarPrefilComponent;
  let fixture: ComponentFixture<ModalEditarPrefilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarPrefilComponent]
    });
    fixture = TestBed.createComponent(ModalEditarPrefilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
