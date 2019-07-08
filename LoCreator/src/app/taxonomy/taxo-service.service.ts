import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from   '@angular/common/http'
import { Taxo } from './taxo';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TaxoServiceService {
  _url1 = AuthService.BASE_PATH+"/api/taxonomies";
  _url2 = AuthService.BASE_PATH+"/api/verbs/levels";
  _url3 = AuthService.BASE_PATH+"/api/levels";

//  _url4 = "http://localhost:8080/api/verbs/levels";
  constructor(private _http: HttpClient) {

   }

   createTaxo(taxo:Taxo){

                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
                return this._http.post<any>(this._url1,taxo,{headers});
   }

}
