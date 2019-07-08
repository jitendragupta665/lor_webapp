import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from   '@angular/common/http'
import { Field } from './field';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class FieldServiceService {
  _url1 = AuthService.BASE_PATH+"/api/levels";
  _url3 = AuthService.BASE_PATH+"/api/fields";
  _url4 = AuthService.BASE_PATH+"/api/domains";

  field:any={fieldName:""};
//  _url4 = "http://localhost:8080/api/verbs/levels";
  constructor(private _http: HttpClient) {

   }
   createField(field:Field,domainid:number){

     let _url5 = this._url3 + "/domains/"+ domainid;
                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
      this.field.fieldName=field.fieldName;
     return this._http.post<any>(_url5,this.field,{headers});
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
       return this._http.get<any>(this._url3 +"/domains"+ dId,{headers} );
   }

}
