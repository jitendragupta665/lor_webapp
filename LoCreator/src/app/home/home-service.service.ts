import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  _url1 = AuthService.BASE_PATH+"/api/los";
  _url2 = AuthService.BASE_PATH+"/api/verbs/levels";
  _url3 = AuthService.BASE_PATH+"/api/levels";
  constructor(private _http: HttpClient) {

   }
getLo(){
  return this._http.get<any>(this._url1);
}

}
