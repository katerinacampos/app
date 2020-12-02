import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneralService } from '../services/general.service';

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()

export class LoginGuard implements CanActivate{//, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(private router: Router,private ser: GeneralService){

  }
  login_logged = 0;
  login_admin = 0;
  canActivate(
    route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ((localStorage.getItem("correo") === null) && localStorage.getItem("pass") === null) {
      this.router.navigateByUrl('/login');
      return false;
    }else{
      
      this.ser.login(localStorage.getItem("correo"),localStorage.getItem("pass")).subscribe(x => this.login_logged = parseInt(x.toString()))
      this.ser.isAdmin(localStorage.getItem("correo"),localStorage.getItem("pass")).subscribe(y => this.login_admin= parseInt(y.toString()))
      
      setTimeout(() => {
      
        if (this.login_logged == 1) {
          if (this.login_admin==0){
            this.router.navigateByUrl('/form');
          }else{
            this.router.navigateByUrl('/admin');
          }
          
        }      
        }, 1000)
      return true;
    }
  }
  /*
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */
}
