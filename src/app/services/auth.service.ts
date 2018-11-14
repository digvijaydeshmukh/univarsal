import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  sendToken(token: string) {
    localStorage.setItem("loggedInUser", token)
  }
  gettoken() {
    return localStorage.getItem("loggedInUser")
  }
  isLoggedIn() {
    return this.gettoken() !== null;
  }
  logout() {
    localStorage.removeItem("loggedInUser");
    this.route.navigate(['home']);
  }
}
