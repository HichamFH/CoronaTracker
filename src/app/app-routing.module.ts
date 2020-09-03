import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailCountryComponent } from './home/table-corona/detail-country/detail-country.component';
import { DetailComponent } from './home/detail/detail.component';


const routes: Routes = [
  { path: '' , component : HomeComponent},
  { path: 'detail/:country' , component: DetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
