import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import {BuyComponent} from './component/buy/buy.component';

const routes: Routes = [
  {path:'',component:ProductViewComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'buy',component:BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
