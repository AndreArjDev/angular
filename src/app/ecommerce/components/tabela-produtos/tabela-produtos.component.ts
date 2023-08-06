import { AdicionarAoCarrinhoService } from '../../service/adicionar-ao-carrinho.service';
import { IdQuantidade, Produto } from './../../model/produto';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})

export class TabelaProdutosComponent implements OnInit {

  @Input() carrinho!: Produto[]
  @Input() totalPreco!: number | string
  @Output() quantidadeProdutoEvent = new EventEmitter();
  total:number = 0;
  constructor( private addcarinhoService: AdicionarAoCarrinhoService) { }


  ngOnInit(): void {
    this.total = this.addcarinhoService.buscarTotaisCarrinho().totalPreco
    this.addcarinhoService.escutar().subscribe(carrinho =>
      this.total = carrinho.totalPreco)
  }

  alterarQuantidadeProduto(idProduto: number | undefined, event: Event): void{
    if(!idProduto){
        alert("erro ao identificar o produto");
        return
    }
    const idQuantidade = new IdQuantidade(idProduto, parseInt((event.target as HTMLInputElement).value));
    this.quantidadeProdutoEvent.emit(idQuantidade);
  }


  calcularPrecoTotalProduto(produto: Produto) {
    return (produto.preco || 0)  * (produto.quantidade || 0);
  }

}
