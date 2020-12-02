import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component'
import { SucursalesComponent } from './components/sucursales/sucursales.component'

import {FormsModule, NgModel} from '@angular/forms'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common';
import { LoginGuard } from './guards/login.guard';

import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const routes : Routes = [
  {path: 'login',component: IniciarsesionComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'form',component: FormularioComponent, canActivate:[LoginGuard]},
  {path: 'welcome',component: BienvenidaComponent},
  {path: 'sucursales',component: SucursalesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    BienvenidaComponent,
    IniciarsesionComponent,
    RegisterComponent,
    AdminComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
