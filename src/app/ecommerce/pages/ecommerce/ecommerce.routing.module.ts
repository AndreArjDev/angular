import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { EcommerceComponent } from "./ecommerce.component";


const routes: Routes = [
  { path: '', component: EcommerceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
