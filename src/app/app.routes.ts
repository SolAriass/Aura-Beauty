import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivateAuth } from './guards/auth.guard';
import { VistaProductoComponent } from './pages/vista-producto/vista-producto.component';
import { MisPedidosComponent } from './pages/mis-pedidos/mis-pedidos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosComponent, canActivate: [canActivateAuth] },
  { path: 'home', component: HomeComponent, canActivate: [canActivateAuth] },
  { path: 'vista-producto/:id', component: VistaProductoComponent, canActivate: [canActivateAuth] },
  { path: 'mis-pedidos', component: MisPedidosComponent, canActivate: [canActivateAuth] },
  { path: 'perfil', component: PerfilComponent },

];
