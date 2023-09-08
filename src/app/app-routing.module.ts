import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RegistrosComponent } from './registros/registros.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[
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
