import { IdQuantidade } from './../../model/produto';
import { Component, OnInit } from '@angular/core';
import { AdicionarAoCarrinhoService } from '../../service/adicionar-ao-carrinho.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho!: Produto[];


  constructor(private addcarrinhoService: AdicionarAoCarrinhoService) {}

  ngOnInit(): void {
    this.carrinho = this.addcarrinhoService.buscarCarrinho();
    console.log(this.carrinho)
  }

  public get temProdutosNoCarrinho(): boolean{
    return this.carrinho.length > 0;
  }

  alterarQuantidadeProduto(idQuantidade: IdQuantidade): void {
      this.addcarrinhoService.alterarQuantidadeProduto(idQuantidade);
      this.addcarrinhoService.notificarProdutosAlterados();
  }
}
