import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
      provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'registro', component: RegistroComponent },
      { path: 'login', component: LoginComponent },
       { path: 'productos', component: ProductosComponent }
    ])
  ]




};
