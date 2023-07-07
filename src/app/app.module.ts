import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { BuyComponent } from './component/buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailsComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
