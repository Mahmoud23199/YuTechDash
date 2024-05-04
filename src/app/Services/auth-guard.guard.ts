import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthloginService } from './authlogin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private authlogin: AuthloginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Your guard logic goes here
    if (this.authlogin.getUserId()) {
      return true;
    } else {
      // Redirect to login page if user is not logged in
      this.router.navigate(['/login']);
      return false;
    }
 }
}
