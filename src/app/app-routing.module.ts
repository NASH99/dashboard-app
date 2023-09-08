import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrosComponent } from './pages/dashboard/registros/registros.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { EstadisticasComponent } from './pages/dashboard/estadisticas/estadisticas.component';
import { HomeDashboardComponent } from './pages/dashboard/home-dashboard/home-dashboard.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'home', component:HomeDashboardComponent},
    {path:'registros', component:RegistrosComponent},
    {path:'estadisticas', component:EstadisticasComponent}
  ]},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
