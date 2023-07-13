import { TestBed } from '@angular/core/testing';

import { ConteudoPaginaService } from './conteudo-pagina.service';

describe('ConteudoPaginaService', () => {
  let service: ConteudoPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteudoPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
