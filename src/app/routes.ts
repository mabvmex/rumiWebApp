import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    { path: '',         redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',     component: AppComponent },
    { path: 'signup',   component: SignupComponent },
    { path: 'login',    component: LoginComponent },
    

]