import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IdQuantidade, Produto } from '../model/produto';
import { Totais } from '../model/totais';

@Injectable({
  providedIn: 'root'
})

export class AdicionarAoCarrinhoService {

  private subject = new Subject<Totais>();
  private storage = window.localStorage;


  constructor() { }

  notificarProdutosAlterados() {
    let totais = this.buscarTotaisCarrinho()
    this.subject.next(totais);
    console.log("notifiquei")
  }

  escutar(): Observable<Totais> {
    return this.subject.asObservable();
}

  carrinhoExiste(): boolean {
    return this.storage.hasOwnProperty('carrinho');
  }

  criar(): void {
    let carrinho = new Array();
    this.storage.setItem('carrinho',JSON.stringify(carrinho));
  }

  adicionar(produto: Produto): void {
    let carrinho = this.buscarCarrinho().map(item => Produto.fromJson(item));
    carrinho.push(produto);
    this.salvar(carrinho);
  }

  produtoNoCarrinho(produto: Produto): boolean {
    let carrinho = this.buscarCarrinho()
    let prod = Produto.fromJson(carrinho.find(p => p.id === produto.id))
    console.log(prod?true:false)
    return prod?true:false;
  }

  salvar(carrinho: Produto[]): void {
    this.storage.setItem('carrinho', JSON.stringify(carrinho));
  }

  buscarCarrinho(): Produto[] {
    return JSON.parse(this.storage.getItem('carrinho')!) || [];
    ;
  }

  buscarTotaisCarrinho(): Totais {
    let carrinho = this.buscarCarrinho();
    let totalItens = carrinho.reduce((acumulador, valorAtual)=>{
      return acumulador + (valorAtual.quantidade || 0)
    }, 0);

    let totalPreco = carrinho.reduce((acumulador, valorAtual) => {
      return acumulador + ((valorAtual.preco || 0) * (valorAtual.quantidade || 0));
    }, 0)

    return {totalItens, totalPreco}
  }

  alterarQuantidadeProduto(idQuantidade: IdQuantidade) {
    let carrinho = this.buscarCarrinho();
    let produto = Produto.fromJson(carrinho.find(produto => produto.id === idQuantidade.id))
    if(produto){
      produto.alterarQuantidade(idQuantidade.quantidade);
      console.log(produto);
      let index = carrinho.indexOf(produto);
      carrinho.splice(index,1, produto)
    }


    this.salvar(carrinho);
  }

}
