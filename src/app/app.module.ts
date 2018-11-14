import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule } from '@angular/forms'
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: '**', component: LoginComponent }
    ])
   
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
