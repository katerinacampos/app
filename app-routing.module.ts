import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegisterComponent } from './components/register/register.component';
import { IniciarsesionComponent } from "./components/iniciarsesion/iniciarsesion.component";
import { LoginGuard } from './guards/login.guard';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent
      
  },
  {
    path: 'login',
    component: IniciarsesionComponent
  },
  {
    path: 'register',
    component: RegisterComponent
    
  },
  {
    path: 'form',
    component: FormularioComponent, 
    canActivate:[LoginGuard]
    
  },
  {
    path: 'welcome',
    component: BienvenidaComponent,
  },
  {
    path: 'admin',
    component: AdminComponent, 
    canActivate:[LoginGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
