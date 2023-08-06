import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { EcommerceRoutingModule } from './pages/ecommerce/ecommerce.routing.module';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { BtnAddCarrinhoComponent } from './components/btn-add-carrinho/btn-add-carrinho.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { CarrinhoResumoComponent } from './components/carrinho-resumo/carrinho-resumo.component';
import { TabelaProdutosComponent } from './components/tabela-produtos/tabela-produtos.component';
import { FormularioCadastroProdutoComponent } from './components/formulario-cadastro-produto/formulario-cadastro-produto.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    CardProdutoComponent,
    BtnAddCarrinhoComponent,
    CarrinhoComponent,
    CarrinhoResumoComponent,
    TabelaProdutosComponent,
    FormularioCadastroProdutoComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

})
export class EcommerceModule { }
