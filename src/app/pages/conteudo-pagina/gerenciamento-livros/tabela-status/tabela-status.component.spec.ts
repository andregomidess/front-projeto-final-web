import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaStatusComponent } from './tabela-status.component';

describe('TabelaStatusComponent', () => {
  let component: TabelaStatusComponent;
  let fixture: ComponentFixture<TabelaStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaStatusComponent]
    });
    fixture = TestBed.createComponent(TabelaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
