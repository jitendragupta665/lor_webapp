import { Injectable,EventEmitter, Output } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import{ HttpClient,HttpHeaders } from   '@angular/common/http'
import {User} from "../model/user";
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators'
//import 'rxjs';
//import { Observable } from 'rxjs/Rx';
@Injectable()
export class AuthService {
   @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(public http: Http,public _http: HttpClient) { }
 static authenticated = false;
 static cusername = "";
  static BASE_PATH ="http://localhost:2000";
  public logIn(user: User){

    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( user.username+ ':' + user.password);
    headers.append("Authorization", "Basic " + base64Credential);

    let options = new RequestOptions();
    options.headers=headers;

    return this.http.get(AuthService.BASE_PATH+"/api/users/login" ,   options).pipe(
      map((response: Response) => {
      let user_auth = response.json().principal;// the returned user object is a principal object
      if (user_auth) {
        let user1 = {
          username:user.username,
          password:user.password,
          role: user_auth.role
        }
        localStorage.setItem('currentUser', JSON.stringify(user1));
        AuthService.authenticated = true;
        this.getLoggedInName.emit(user.username);
      }
    }));
  }

  logOut() {
var _url = AuthService.BASE_PATH+"/logout";
    return this.http.post(_url,{}).pipe(
      map((response: Response) => {
        localStorage.removeItem('currentUser');
        AuthService.authenticated = false;
      }));
  }

getUser(){
var _url = AuthService.BASE_PATH+"/api/admin/users";
var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
 var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
 return this._http.get<any>(_url,{headers});

}
getUserById(id){
var _url = AuthService.BASE_PATH+"/api/admin/users/"+id;
var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
 var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
 return this._http.get<any>(_url,{headers});

}
updateRole(id:number,role:string){
var Role={
  role:role
};
  var _url = AuthService.BASE_PATH+"/api/admin/users/"+id;
  var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
   var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
   return this._http.put<any>(_url,Role,{headers});

}
}
