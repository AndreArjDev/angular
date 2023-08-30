import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from '../../model/produto';


@Component({
  selector: 'app-ecommerce',
  templateUrl:'./ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  mostrarLoja = true;
  mostrarCarrinho = false;
  mostrarFormCadastroProduto = false;

  produtos!: Produto[];
  url = 'http://localhost:3000';

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.buscarProdutos()
    .subscribe(resposta => this.produtos = resposta.map( r => Produto.fromJson({...r,id:r._id})));
  }

  buscarProdutos(){
    return this.http.get<any[]>(`${this.url}/produtos`)
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
