import { BreakingBadRoutingModule } from './breaking-bad-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingBadComponent } from './breaking-bad.component';
import { InputPesquisaComponent } from './input-pesquisa/input-pesquisa.component';
import { FormularioQuotesComponent } from './formulario-quotes/formulario-quotes.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    BreakingBadComponent,
    InputPesquisaComponent,
    FormularioQuotesComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BreakingBadRoutingModule
  ],

})
export class BreakingBadModule { }
