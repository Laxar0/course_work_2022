import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PersonnelPageComponent } from './pages/personnel-page/personnel-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'personnel', component: PersonnelPageComponent },
  { path: 'faq', component: FaqPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
