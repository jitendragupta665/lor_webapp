import { Component, OnInit } from '@angular/core';
import { Domain } from '../domain/domain';
import {Field} from '../field/field'
import { Subject } from './subject';
import{SubjectServiceService} from './subject-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjectModel = new Subject("");
  constructor( private _subjectService : SubjectServiceService) { }
  domains:any;
  fields:any = [];
  subjects:any=[];
  domainid:any=null;
  fieldid:any=null;
  ngOnInit() {
    this._subjectService.getDomain()
      .subscribe(
        data=>this.domains=data
    )
  }

  onChangeDomain(id:number){
    if(id){
    this.domainid=id;
    this._subjectService.getField(id)
      .subscribe(
        data=>{this.fields=data;
        this.subjects = null;}
    )
}else{
  this.fields = null;
  this.subjects= null;
}
  }
  onChangeField(id:number){
    if(id){
    this.fieldid=id;
    this._subjectService.getSubject(id)
      .subscribe(
        data=>{this.subjects=data;
        console.log("Success",data );},
         error =>this.subjects = null
    )
}else{
  this.subjects = null;
}
  }
  onSubmit(){
    if(this.domainid && this.fieldid){
  this._subjectService.createSubject(this.subjectModel,this.fieldid)
    .subscribe(
      data=>{
        this.onChangeField(this.fieldid);
        console.log('Success',data);
    alert("Submitted Successfully");
      this.subjectModel.subjectName="";

  }

  )
}
}
}
