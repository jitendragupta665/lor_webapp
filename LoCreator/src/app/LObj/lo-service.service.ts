import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from   '@angular/common/http';
import { Lo } from './lo';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoServiceService {
  _url1 = AuthService.BASE_PATH+"/api/los";
  _url2 = AuthService.BASE_PATH+"/api/verbs/levels";
  _url3 = AuthService.BASE_PATH+"/api/levels";
  _url4 = AuthService.BASE_PATH+"/api/taxonomies";
  _url5 =AuthService.BASE_PATH+"/api/types";
  _url6 =AuthService.BASE_PATH+"/api/domains";
  _url7 =AuthService.BASE_PATH+"/api/fields";
  _url8 = AuthService.BASE_PATH+"/api/categories";
  constructor(private _http: HttpClient) {

   }
   createLo(lo:Lo){

  var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
  var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
//  console.log(currentUser.password);
     return this._http.post<any>(this._url1,lo,{headers});
   }
   createLoByTypeId(lobj:Lo,taxoid,levelid,verbid){
     var type = {	 lo:lobj.lo,
	taxoId:taxoid.toString(),
	levelId:levelid.toString(),
	 verbId:verbid.toString()
     }
       var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
       var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
          return this._http.post<any>(this._url5,type,{headers});

   }
   createLoByCategoryId(lobj:Lo,domainid,fieldid,subjectid,topicid){
     var category = {
        lo:lobj.lo,
	domainId:domainid.toString(),
	fieldId:fieldid.toString(),
	 subjectId:subjectid.toString(),
   topicId:topicid.toString()
     }
       var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
       var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
         return this._http.post<any>(this._url8,category,{headers});

   }
   getTaxonomy(){
            var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
            var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
          return this._http.get<any>(this._url4,{headers});
   }
   getVerb(id){
       var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
       var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     var lId:String = "/" + id.toString();
     return this._http.get<any>(this._url2 + lId ,{headers});
   }
   getLevel(id){
       var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
       var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     return this._http.get<any>(this._url3+"/taxonomies/"+id,{headers});

 }
 getDomain(){
            var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
            var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
          return this._http.get<any>(this._url6,{headers});
 }
 getField(dId){

       var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
       var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     return this._http.get<any>(this._url7+"/domains/"+dId,{headers});

 }
}
