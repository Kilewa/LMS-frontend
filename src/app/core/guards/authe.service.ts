import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from '../authentication/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(public auth: AuthServiceService, public router: Router) {}
    canActivate(): boolean {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
}
