import { Component, Input } from '@angular/core';
import { Produto} from '../../model/produto';
import { AdicionarAoCarrinhoService } from '../../service/adicionar-ao-carrinho.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent {
  @Input()
  produtoCard!: Produto;

  constructor(private addcarrinhoService: AdicionarAoCarrinhoService) {
  }

  adicionarAoCarrinho(quantidade: number): void  {
    const {id,imagem, nome, preco} = this.produtoCard;
    const produto = new Produto(id, nome, preco, imagem, quantidade);

    if(!this.addcarrinhoService.carrinhoExiste()){
      this.addcarrinhoService.criar();
    }

    this.addcarrinhoService.produtoNoCarrinho(produto)?
      this.addcarrinhoService.alterarQuantidadeProduto(produto.id!, quantidade):
      this.addcarrinhoService.adicionar(produto)

    this.addcarrinhoService.notificarProdutosAlterados();
  }

}
