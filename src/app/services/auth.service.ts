import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:3000/" //en producción  url = /

constructor(private http: Http) { }

  signup(auth): Observable<string> {
    return this.http.post(this.url + 'signup', auth)
    .pipe(map(res=>res.json()))
  }

  login(id): Observable<string>{
    return this.http.post(this.url + 'login/' + id, auth, {withCredentials:true})
    .pipe(map(res=>res.json()))
  }

  getPrivateDepartments(){
    return this.http.get(this.url + 'private', {withCredentials:true})
    .pipe(map(res=>res.json()))
  }

  logout(){
    localStorage.removeItem('user')
  }

}
