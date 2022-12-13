import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PersonnelPageComponent } from './pages/personnel-page/personnel-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, NavigationComponent, HomePageComponent, AboutPageComponent, PersonnelPageComponent, FaqPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
