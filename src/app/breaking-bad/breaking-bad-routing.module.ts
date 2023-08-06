import { RouterModule, Routes } from "@angular/router";
import { FormularioQuotesComponent } from "./formulario-quotes/formulario-quotes.component";
import { NgModule } from "@angular/core";
import { BreakingBadComponent } from "./breaking-bad.component";



const routes: Routes = [
  { path: '', component: BreakingBadComponent },
  { path: 'formulario-quotes', component: FormularioQuotesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakingBadRoutingModule { }
