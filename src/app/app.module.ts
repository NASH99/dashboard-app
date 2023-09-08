import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; //Etiqueta de routing
//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './common-components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { RegistrosComponent } from './pages/dashboard/registros/registros.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EstadisticasComponent } from './pages/dashboard/estadisticas/estadisticas.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { NavComponent } from './shared/nav/nav.component';
import { MenuSelectComponent } from './common-components/menu-select/menu-select.component';
//Angular Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

//Enrutamiento
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeDashboardComponent } from './pages/dashboard/home-dashboard/home-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSelectComponent,
    HomeComponent,
    RegistrosComponent,
    PageNotFoundComponent,
    EstadisticasComponent,
    DashboardComponent,
    NavComponent,
    LoginComponent,
    HomeDashboardComponent
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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
