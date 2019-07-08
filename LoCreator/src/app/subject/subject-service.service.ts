import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from   '@angular/common/http';
import { Subject } from './subject';
import {AuthService} from '../services/auth.service';
//import { Verb } from './lo';
@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  _url1 = AuthService.BASE_PATH+"/api/subjects";
  _url2 = AuthService.BASE_PATH+"/api/subjects/fields";
  _url3 = AuthService.BASE_PATH+"/api/fields";
  _url4 = AuthService.BASE_PATH+"/api/domains";

  subject:any={subjectName:""};
  constructor(private _http: HttpClient) {

   }
   createSubject(subject:Subject,id:number){

                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     let _url5 = this._url1 +"/fields/"+id;
     console.log(_url5);
      this.subject.subjectName=subject.subjectName;
     return this._http.put<any>(_url5,this.subject,{headers});
   }
   getDomain(){
                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     return this._http.get<any>(this._url4,{headers});
   }
   getField(id:number){

    var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
    var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
       var dId:String = "/" + id.toString();
       return this._http.get<any>(this._url3 +"/domains"+ dId ,{headers});
   }

   getSubject(id){

    var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
    var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     return this._http.get<any>(this._url2 +"/"+ id,{headers} );
   }

}
