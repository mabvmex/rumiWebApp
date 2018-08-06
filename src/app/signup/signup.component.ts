import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//servicios
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  auth = {};
  user = null;
  submitForm(myForm) {
    console.log(myForm);
  }
  
  constructor(
    private authservice: AuthService, 
    private router: Router) { }

redirectLogin(){
  this.router.navigate(['login'])
}

 signup(){
  this.authservice.login(this.auth).subscribe(user=>{
    this.user = user
    localStorage.setItem('user', JSON.stringify(user))
    this.router.navigate(['Profile'])
  })
 }
  ngOnInit() {
  }
  
}
