import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { MoreDetailComponent } from './more-detail/more-detail.component'
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path : 'moredetails/:name', component : MoreDetailComponent},
  {path : 'home',component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
