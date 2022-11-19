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
import { BrandComponent } from './components/headers-component/footerMenu/brand/brand.component';


import { BrandsComponent } from './components/brands.component';
import { FuterComponent } from './components/futer.component';
import { ProductsComponent } from './components/products.component';
import { SliderComponent } from './components/slider.component';







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
