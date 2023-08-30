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

  alterarQuantidadeProduto(produto: Produto): void {
      if(produto.quantidade===1){
        this.addcarrinhoService.removerProduto(produto);
      }
      this.addcarrinhoService.alterarQuantidadeProduto(produto.id as number, produto.quantidade as number);
      this.addcarrinhoService.notificarProdutosAlterados();
  }
}
