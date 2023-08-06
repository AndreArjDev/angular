import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoComponent } from './carrinho.component';
import { TabelaProdutosComponent } from '../../components/tabela-produtos/tabela-produtos.component';
import { AdicionarAoCarrinhoService } from '../../service/adicionar-ao-carrinho.service';

describe('CarrinhoComponent', () => {
  let component: CarrinhoComponent;
  let fixture: ComponentFixture<CarrinhoComponent>;
  let service:  AdicionarAoCarrinhoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoComponent, TabelaProdutosComponent ],
      providers: [AdicionarAoCarrinhoService],
      //imports: [BreakingBadModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AdicionarAoCarrinhoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve notificar produtos alterados', () => {
    spyOn(service,'alterarQuantidadeProduto');
    spyOn(service,'notificarProdutosAlterados');

    let idQuantidade = {id:1, quantidade: 2};
    component.alterarQuantidadeProduto(idQuantidade);

    expect(service.alterarQuantidadeProduto).toHaveBeenCalledWith(idQuantidade);
    expect(service.notificarProdutosAlterados).toHaveBeenCalled();
  })

});
