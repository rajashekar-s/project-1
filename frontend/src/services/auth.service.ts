import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
// import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user) {
    let headers = new Headers();
    console.log(headers,user);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      .map(res => res.json());
  }
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers: headers})
      .map(res => res.json());
  }
  updateUserData(user) {
    let headers = new Headers();
    console.log(headers,user);
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/api/user/' + user._id, user,{headers: headers})
      .map(res => res.json());
  }

 loadToken(){
   const token = localStorage.getItem('id_token');
   this.authToken = token;
 }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  // for mail verification
  forgotpasswordMail(email) {
    console.log(email);
    let emailId = {
      email: email
    }
    let headers = new Headers();
    headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/forgot',emailId,{headers: headers})
    .map(res => res.json());
  }

  resetPassword(passwordData) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/api/forgotpassword/'+passwordData.emailId,passwordData,{headers: headers})
    .map(res => res.json());
  }


  loggedIn(){

  //  return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  updateProfile(userProfiledata) {
    let headers = new Headers();
    //console.log(headers,user);
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/api/profile/' + userProfiledata._id, userProfiledata,{headers: headers})
      .map(res => res.json());
  }

}
