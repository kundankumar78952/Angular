import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private r:Router) { }
  canActivate():boolean{
    // return false;
    let loggedIn= true;
    if(loggedIn){ 
      return true;
    }
    else{
      this.r.navigate(['/login']);
      return false;
    }
  }
}
