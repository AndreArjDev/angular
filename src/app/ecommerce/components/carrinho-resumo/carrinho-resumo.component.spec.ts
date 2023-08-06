import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoResumoComponent } from './carrinho-resumo.component';

describe('CarrinhoResumoComponent', () => {
  let component: CarrinhoResumoComponent;
  let fixture: ComponentFixture<CarrinhoResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoResumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
