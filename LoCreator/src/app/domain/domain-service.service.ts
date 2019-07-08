import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from   '@angular/common/http'
import { Domain } from './domain';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DomainServiceService {
  _url1 = AuthService.BASE_PATH+"/api/domains";
  constructor(private _http: HttpClient) {

   }

   createDomain(domain:Domain){

                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
                return this._http.post<any>(this._url1,domain,{headers});
   }

}
