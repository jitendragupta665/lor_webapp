import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from   '@angular/common/http'
import { Topic } from './topic';
import {AuthService} from '../services/auth.service';
//import { Verb } from './lo';
@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {
  _url1 = AuthService.BASE_PATH+"/api/topics/subjects";

  topic:any={topicName:""};
  constructor(private _http: HttpClient) {

   }
   createTopic(topic:Topic,id:number){

                var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
                var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
                this.topic.topicName=topic.topicName;
     return this._http.post<any>(this._url1 +"/"+ id,this.topic,{headers});
   }
   getTopic(id){

    var currentUser:any =  JSON.parse(localStorage.getItem('currentUser'));
    var headers = new HttpHeaders({Authorization:'Basic '+ btoa(currentUser.username+':'+currentUser.password)});
     return this._http.get<any>(this._url1 + "/"+id,{headers} );
   }

}
