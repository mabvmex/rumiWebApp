//componentes
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//servicios
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth = {};
  user = null;

  constructor(
     private authservice: AuthService, 
     private router: Router
    ) { }

    redirectSignup() {
      this.router.navigate(['signup'])
    }

    login(){
     this.authservice.login(this.auth).subscribe(user=>{
       this.user = user
       localStorage.setItem('user', JSON.stringify(user))
       this.router.navigate(['Profile'])
     })
    }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['departaments'])
    }
  }

}