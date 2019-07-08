import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Http} from "@angular/http";
 import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs';
import {AuthService} from './auth.service'
@Injectable()
export class AccountService {

  _url=AuthService.BASE_PATH;
  constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post(this._url+'/api/users/register',user).pipe(
      map(resp=>resp.json()));
  }
}
