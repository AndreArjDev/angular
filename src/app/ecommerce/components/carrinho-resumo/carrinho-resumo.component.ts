import { Component, OnInit } from '@angular/core';
import { AdicionarAoCarrinhoService } from '../../service/adicionar-ao-carrinho.service';

@Component({
  selector: 'app-carrinho-resumo',
  templateUrl: './carrinho-resumo.component.html',
  styleUrls: ['./carrinho-resumo.component.css']
})
export class CarrinhoResumoComponent implements OnInit {


  quantidadeItems: number = 0;
  total:number = 0

  constructor( private addcarinhoService: AdicionarAoCarrinhoService) {
      if(this.addcarinhoService.carrinhoExiste()){
        const carrinho = this.addcarinhoService.buscarTotaisCarrinho();
        this.quantidadeItems = carrinho.totalItens;
        this.total = carrinho.totalPreco;
      }
   }

  ngOnInit(): void {
    this.addcarinhoService.escutar().subscribe(carrinho => {
      this.quantidadeItems = carrinho.totalItens
      this.total = carrinho.totalPreco
    })
  }

}
