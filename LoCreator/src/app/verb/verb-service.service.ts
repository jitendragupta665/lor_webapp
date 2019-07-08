import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from   '@angular/common/http'
import { Verb } from './verb';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class VerbServiceService {
  _url1 = AuthService.BASE_PATH+"/api/levels";
  _url2 = AuthService.BASE_PATH+"/api/verbs/levels";
  _url3 = AuthService.BASE_PATH+"/api/levels";
  _url4 = AuthService.BASE_PATH+"/api/taxonomies"

  verb:any={verbName:""};
  constructor(private _http: HttpClient) {

   }
   createVerb(verb:Verb,id:number){

                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     let _url5 = this._url2 +"/"+id;
     console.log(_url5);
      this.verb.verbName=verb.verbName;
     return this._http.post<any>(_url5,this.verb,{headers});
   }
   getTaxo(){
                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     return this._http.get<any>(this._url4,{headers});
   }
   getLevel(id:number){

    var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
    var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
       var lId:String = "/" + id.toString();
       return this._http.get<any>(this._url3 +"/taxonomies"+ lId ,{headers});
   }

   getVerb(id){

    var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
    var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     var lId:String = "/" + id.toString();
     return this._http.get<any>(this._url2 + lId,{headers} );
   }
   /*
   getLevel(){
     return this._http.get<any>(this._url3);
   } */
  /*getLevelBySelectedVerb(verb:Verb){
return this._http.get<any>(this._url4,verb);

}*/
}
