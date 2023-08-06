import { Component, OnInit } from '@angular/core';
import { ProdutoCard } from '../../model/produto';


@Component({
  selector: 'app-ecommerce',
  templateUrl:'./ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  mostrarLoja = true;
  mostrarCarrinho = false;
  mostrarFormCadastroProduto = false;

  produtos: ProdutoCard[] = [
    {'id': 1, 'nome':'sapato', 'preco': 123.49, 'imagem':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQce_prTCamgk_QvbSQPYY7Dtyke0cNY1hWg&usqp=CAU'},
    {'id': 2, 'nome':'sapato', 'preco': 123.49, 'imagem':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQce_prTCamgk_QvbSQPYY7Dtyke0cNY1hWg&usqp=CAU'},
    {'id': 3, 'nome':'sapato', 'preco': 123.49, 'imagem':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQce_prTCamgk_QvbSQPYY7Dtyke0cNY1hWg&usqp=CAU'},
    {'id': 4, 'nome':'sapato', 'preco': 123.49, 'imagem':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQce_prTCamgk_QvbSQPYY7Dtyke0cNY1hWg&usqp=CAU'}
]
  constructor() { }

  ngOnInit(): void {
  }

  verLoja(){
    this.mostrarLoja = true;
    this.mostrarCarrinho = false;
    this.mostrarFormCadastroProduto = false;
  }

  verCarrinho(){
    this.mostrarLoja = false;
    this.mostrarCarrinho = true;
    this.mostrarFormCadastroProduto = false;
  }

  verCadastroProduto(){
    this.mostrarLoja = false;
    this.mostrarCarrinho = false;
    this.mostrarFormCadastroProduto = true;
  }

}
