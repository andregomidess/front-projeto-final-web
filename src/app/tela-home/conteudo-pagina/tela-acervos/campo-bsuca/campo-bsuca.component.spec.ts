import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoBsucaComponent } from './campo-bsuca.component';

describe('CampoBsucaComponent', () => {
  let component: CampoBsucaComponent;
  let fixture: ComponentFixture<CampoBsucaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoBsucaComponent]
    });
    fixture = TestBed.createComponent(CampoBsucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
