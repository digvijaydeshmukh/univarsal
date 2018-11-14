import { Component, OnInit } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string
  password: string;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {

  }
  save(val, form) {
    console.log("form", form)
    if (form.valid) {
      this.auth.sendToken(val.email)
      this.route.navigate(['home']);
      console.log("test", val);
    }

  }

}
