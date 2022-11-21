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
import { NavBarComponent } from './components/headers-component/footerMenu/navbar/navBar.component';
// brand
import { BrandComponent } from './components/headers-component/footerMenu/brand/brand.component';
import { NoveltiesComponent } from './components/brands/novelties/novelties.component';
import { HotPicesComponent } from './components/brands/hotPices/hotPices.component';
import { TopSaleComponent } from './components/brands/topSale/topSale.component';

import { BrandsComponent } from './components/brands/brands.component';
import { FuterComponent } from './components/futer.component';
import { ProductsComponent } from './components/products.component';
import { SliderComponent } from './components/slider/slider.component';











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
    BrandsComponent,
    FuterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
