import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

const isAuthenticated = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree>  =>{


  const router = inject(Router);

  const usuario = localStorage.getItem('usuario');

  return usuario ? of(true) : of(router.createUrlTree(['/login']))
}



export const canActivateAuth:CanActivateFn = isAuthenticated;

