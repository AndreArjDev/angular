import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-add-carrinho',
  templateUrl: './btn-add-carrinho.component.html',
  styleUrls: ['./btn-add-carrinho.component.css']
})
export class BtnAddCarrinhoComponent implements OnInit {

  @Output() quantidadeProdutoEvent = new EventEmitter();
  quantidade: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  adicionarAoCarrinho() {
    this.quantidadeProdutoEvent.emit(this.quantidade);
  }

}
