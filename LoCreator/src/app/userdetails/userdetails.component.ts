import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import {AuthService} from "../services/auth.service";
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user ={
   id:"",
  username:"",
  fullName:"",
  role:""

};
userid;
selected_role:string="";
  constructor(private route:ActivatedRoute,private authService :AuthService) { }

  ngOnInit() {
this.userid = this.route.snapshot.paramMap.get('id');
this.authService.getUserById(this.userid)
  .subscribe(
    data=> {this.user = data;
            }
  )
  }
onClick(){
  if(this.selected_role !== "")
  this.authService.updateRole(this.userid,this.selected_role)
    .subscribe(
    data=>this.user['role'] = this.selected_role
    )
}
}
