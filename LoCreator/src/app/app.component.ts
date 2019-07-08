import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthService} from "./services/auth.service";
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LoCreator';
  cUsername:string="";
  constructor(private http: HttpClient, private router: Router,private authenticationService:AuthService) {
authenticationService.getLoggedInName.subscribe(username => this.changeUserName(username));
    }
    ngOnInit() {

      if(localStorage.getItem('currentUser')){
       AuthService.authenticated= true;
this.cUsername = JSON.parse(localStorage.getItem('currentUser')).username;
     }
       else {
         AuthService.authenticated= false;
         this.cUsername=""
       }
    }
    private changeUserName(username: string): void {
           this.cUsername = username;
       }
logOut() {
  var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
  var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
var _url = AuthService.BASE_PATH+"/logout";
    this.http.post(_url, {},{headers}).pipe(finalize(() => {
       AuthService.authenticated = false;
       this.cUsername = "";
      localStorage.removeItem('currentUser');
       this.router.navigateByUrl('/login');
   })).subscribe();
 }

authenticated() {
   return AuthService.authenticated; }
   role(){
     if(AuthService.authenticated){
     let role = JSON.parse(localStorage.getItem('currentUser')).role;
     if(role === "Admin"){
     return true;}
     else false;
   }
 }
}
