import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// header
import { HeaderComponent } from './components/headers-component/header.component';
import { TopMenuComponent } from './components/headers-component/topMenu/topMenu.component';
import { SignComponent } from './components/headers-component/topMenu/signUp/sign.component';
import { MiddleMenuComponent } from './components/headers-component/middleMenu/middleMenu.component';
import { FooterMenuComponent } from './components/headers-component/footerMenu/footerMenu.component';
import { BrandComponent } from './components/headers-component/footerMenu/brand/brand.component';
import { NavBarComponent } from './components/headers-component/footerMenu/navbar/navBar.component';
//slider
import { SliderComponent } from './components/slider/slider.component';
// brand
import { NoveltiesComponent } from './components/brands/novelties/novelties.component';
import { HotPicesComponent } from './components/brands/hotPices/hotPices.component';
import { TopSaleComponent } from './components/brands/topSale/topSale.component';
import { BrandsComponent } from './components/brands/brands.component';
//product
import { ProductsComponent } from './components/product/products.component';
import { ProductCardComponent } from './components/product/productCard/productCard.component';
//footer
import { FuterComponent } from './components/footer/futer.component';
import { FuterMenuComponent } from './components/footer/footerMenu/footerMenu.component';












@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignComponent,
    TopMenuComponent,
    MiddleMenuComponent,
    FooterMenuComponent,
    NavBarComponent,
    BrandComponent,
    NoveltiesComponent,
    HotPicesComponent,
    TopSaleComponent,
    SliderComponent,
    ProductsComponent,
    ProductCardComponent,
    BrandsComponent,
    FuterComponent,
    FuterMenuComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
