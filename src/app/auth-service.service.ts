import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseURL=environment.baseURL

  constructor( public http:HttpClient) { }
  register(data:any)
  {
    return this.http.post( this.baseURL + '/users/userCreate',data)
  }
  login()
  {
     return this.http.get(this.baseURL + '/users/login')
  }
  generateToken(data:any){
    return this.http.post(this.baseURL+'/users/generateToken',data)
  }

getToken(): string {
  return JSON.parse(JSON.stringify(localStorage.getItem('token')) ||'{}')
}
public isAuthenticated()  {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token'))|| '{}') 
    console.log(token);
    return token == null ;
  }
}

