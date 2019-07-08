import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from   '@angular/common/http'
import { Level } from './level';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class LevelServiceService {
  _url1 = AuthService.BASE_PATH+"/api/levels";
  _url2 = AuthService.BASE_PATH+"/api/verbs/levels";
  _url3 = AuthService.BASE_PATH+"/api/levels";
  _url4 = AuthService.BASE_PATH+"/api/taxonomies"

  lvl:any={levelName:"",levelDescription:""};
//  _url4 = "http://localhost:8080/api/verbs/levels";
  constructor(private _http: HttpClient) {

   }
   createLevel(level:Level,taxoid:number){

     let _url5 = this._url3 + "/taxonomies/"+taxoid;
                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
      this.lvl.levelName=level.levelName;
      this.lvl.levelDescription=level.levelDescription;
      console.log(level.levelDescription)
     return this._http.post<any>(_url5,this.lvl,{headers});
   }
   getTaxo(){
              var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
              var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     return this._http.get<any>(this._url4,{headers});
   }
   getLevel(id:number){

         var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
         var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
       var tId:String = "/" + id.toString();
       return this._http.get<any>(this._url3 +"/taxonomies"+ tId,{headers} );
   }

}
