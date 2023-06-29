import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAcervoComponent } from './cadastra-acervo.component';

describe('CadastraAcervoComponent', () => {
  let component: CadastraAcervoComponent;
  let fixture: ComponentFixture<CadastraAcervoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastraAcervoComponent]
    });
    fixture = TestBed.createComponent(CadastraAcervoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
