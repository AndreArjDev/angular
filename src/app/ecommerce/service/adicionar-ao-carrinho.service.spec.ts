import { TestBed } from '@angular/core/testing';

import { AdicionarAoCarrinhoService } from './adicionar-ao-carrinho.service';

describe('AdicionarAoCarrinhoService', () => {
  let service: AdicionarAoCarrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionarAoCarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
