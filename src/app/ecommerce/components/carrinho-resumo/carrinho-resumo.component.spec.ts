import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoResumoComponent } from './carrinho-resumo.component';
import { AdicionarAoCarrinhoService } from '../../service/adicionar-ao-carrinho.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CarrinhoResumoComponent', () => {
  let component: CarrinhoResumoComponent;
  let fixture: ComponentFixture<CarrinhoResumoComponent>;
  let addCarrinhoService: AdicionarAoCarrinhoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoResumoComponent ],
      providers: [AdicionarAoCarrinhoService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoResumoComponent);
    addCarrinhoService = TestBed.inject(AdicionarAoCarrinhoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve mostrar valor total e total de itens', ()=>{
    spyOn(addCarrinhoService, 'carrinhoExiste').and.returnValue(true);

    component.quantidadeItems = 1
    component.total = 123.40

    fixture.detectChanges()

    const quantidade: DebugElement = fixture.debugElement.query(By.css('#quantidadeItens'));
    const total: DebugElement = fixture.debugElement.query(By.css('#valorTotal'));

    expect(quantidade.nativeElement.innerHTML).toBe('1 itens');
    expect(total.nativeElement.innerHTML).toBe('R$123.40');
  })
});
