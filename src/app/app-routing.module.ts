import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EcommerceModule } from './ecommerce/ecommerce.module';


const routes: Routes = [
  {path: 'ecommerce', loadChildren: ()=> import("./ecommerce/ecommerce.module").then(mod => mod.EcommerceModule)},
  { path: 'breaking-bad', loadChildren: ()=> import('./breaking-bad/breaking-bad.module').then(mod => mod.BreakingBadModule)},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
