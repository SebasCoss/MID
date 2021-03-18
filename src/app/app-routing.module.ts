import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardEditComponent } from './pages/dashboard-edit/dashboard-edit.component';


const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-edit', component: DashboardEditComponent},
  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
