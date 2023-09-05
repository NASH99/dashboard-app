import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { MenuComponent } from './common-components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegistrosComponent } from './registros/registros.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MenuSelectComponent } from './common-components/menu-select/menu-select.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { LoginComponent } from './auth/login/login.component';

import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './shared/nav/nav.component';

//Enrutamiento
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'registros', component:RegistrosComponent},
  {path:'estadisticas', component:EstadisticasComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    MenuSelectComponent,
    HomeComponent,
    RegistrosComponent,
    PageNotFoundComponent,
    EstadisticasComponent,
    HeaderComponent,
    DashboardComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
