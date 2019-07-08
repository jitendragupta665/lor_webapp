import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from "../services/auth.service";
@Injectable()
export class UrlRolePermission implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var role:string = JSON.parse(localStorage.getItem('currentUser')).role;
    if ((role !== "Creator")) {

      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/unauthorised'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
@Injectable()
export class UrlAdminPermission implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var role:string = JSON.parse(localStorage.getItem('currentUser')).role;
    if ((role === "Admin")) {

      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/unauthorised'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
