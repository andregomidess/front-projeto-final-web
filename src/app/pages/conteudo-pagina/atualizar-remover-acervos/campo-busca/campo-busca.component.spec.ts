import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoBuscaComponent } from './campo-busca.component';

describe('CampoBuscaComponent', () => {
  let component: CampoBuscaComponent;
  let fixture: ComponentFixture<CampoBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoBuscaComponent]
    });
    fixture = TestBed.createComponent(CampoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
