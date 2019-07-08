import { Component, OnInit } from '@angular/core';
import { Domain } from '../domain/domain';
import {Field} from '../field/field'
import { Subject } from '../subject/subject';
import { Topic } from './topic';
import{TopicServiceService} from './topic-service.service';
import{SubjectServiceService} from '../subject/subject-service.service';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topicModel = new Topic("");
  constructor( private _topicService : TopicServiceService,private _subjectService : SubjectServiceService) { }
  domains:any;
  fields:any = [];
  subjects:any=[];
  topics:any = [];
  domainid:any=null;
  fieldid:any=null;
  subjectid:any = null;
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
        this.subjects = null;
        this.topics = null;
      }
    )
}else{
  this.fields = null;
  this.subjects= null;
  this.topics = null;
}
  }
  onChangeField(id:number){
    if(id){
    this.fieldid=id;
    this._subjectService.getSubject(id)
      .subscribe(
        data=>this.subjects=data,
         error =>{this.subjects = null;
           this.topics = null;
         }
    )
}else{
  this.subjects = null;
  this.topics = null;
}
  }
  onChangeSubject(id:number){
    if(id){
    this.subjectid=id;
    this._topicService.getTopic(id)
      .subscribe(
        data=>this.topics=data,
         error =>this.topics = null
    )
}else{
  this.topics = null;
}
  }
  onSubmit(){
    if(this.domainid && this.fieldid && this.subjectid){
  this._topicService.createTopic(this.topicModel,this.subjectid)
    .subscribe(
      data=>{
        this.onChangeSubject(this.subjectid);
        alert("Submitted Successfully");
        this.topicModel.topicName="";
    }
  )
}
}
}
