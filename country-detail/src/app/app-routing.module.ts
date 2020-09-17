import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreDetailComponent } from './more-detail/more-detail.component'
const routes: Routes = [
  {path : 'details', component : MoreDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
