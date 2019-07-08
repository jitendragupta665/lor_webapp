import { Component, OnInit } from '@angular/core';
import{LoServiceService} from './lo-service.service';
import{TopicServiceService} from '../topic/topic-service.service';
import{SubjectServiceService} from '../subject/subject-service.service';
import{ HttpClient } from   '@angular/common/http'
import { Lo } from './lo';


@Component({
  selector: 'app-LObj',
  templateUrl: './lo.component.html',
  styleUrls: ['./lo.component.css']
})
export class LoComponent implements OnInit {
  constructor(private _loService : LoServiceService,private _topicService : TopicServiceService,private _subjectService : SubjectServiceService,private http: HttpClient) { }
  loModel = new Lo("");
  taxonomies:any=[];
  levels:any=[];
  verbs:any=[];
  taxoid="";
  levelid="";
  verbid="";
  domains:any=[];
  fields:any=[];
  subjects:any=[];
  topics:any=[];
  domainid="";
  fieldid="";
  subjectid="";
  topicid="";
  ngOnInit() {
    this._loService.getTaxonomy()
      .subscribe(
        data=> this.taxonomies = data,

    )
    this._loService.getDomain()
      .subscribe(
        data=> this.domains = data,
        data=>console.log('Success',data)

    )
}
  onSubmit(){
    var flag = true;
    if(this.loModel.lo && this.taxoid && this.levelid && this.verbid ){
      flag = false;
  this._loService.createLoByTypeId(this.loModel,this.taxoid,this.levelid,this.verbid)
    .subscribe(
      data=>{
        if(this.domainid && this.fieldid && this.subjectid && this.topicid){
          this._loService.createLoByCategoryId(this.loModel,this.domainid, this.fieldid,this.subjectid,this.topicid)
            .subscribe(
              data=>{console.log('Success',data);
            }

        )

        }

        alert("Submitted Successfully");
      }
  )
}
if(this.domainid && this.fieldid && this.subjectid && this.topicid && flag){
  this._loService.createLoByCategoryId(this.loModel,this.domainid, this.fieldid,this.subjectid,this.topicid)
    .subscribe(data=>{alert("Submitted Successfully");
}
)

}
 if(this.loModel && (this.taxoid=="") && (this.levelid=="") && (this.verbid=="") &&(this.domainid=="") && (this.fieldid=="") && (this.subjectid=="") && (this.topicid=="")){
this._loService.createLo(this.loModel)
  .subscribe(data=>{alert("Submitted Successfully");
  this.loModel.lo=null;

}
)

}
  }
  onChangeTaxonomy(tId : number){
    if(tId){
      this.taxoid=tId.toString();
    this._loService.getLevel(tId)
      .subscribe(
        data=> {this.levels  = data;
             this.verbs = null;
             this.verbid="";
        },
         error=> {this.levels = null;
                   this.verbs = null;
                 this.verbid="";}
    )
  }
  else{
    this.levels= null;
    this.verbs = null;
    this.taxoid="";
    this.levelid="";
    this.verbid="";
  }
}

onChangeLevel(lId : number){
  if(lId){
    this.verbid=""
    this.levelid = lId.toString();
  data=>console.log('Success',lId)
  this._loService.getVerb(lId)
    .subscribe(
      data=> this.verbs  = data,
      error => {this.verbs = null;
      this.verbid="";}
  )
}
else{
  this.verbs = null;
  this.verbid="";
}
}
onChangeDomain(dId : number){
  if(dId){
    console.log(dId);
    this.domainid=dId.toString();
  this._loService.getField(dId)
    .subscribe(
      data=> {this.fields  = data;
           this.subjects = null;
           this.topics=null;
            this.topicid="";
      },
       error=> {this.fields  = null;
            this.subjects = null;
             this.topics=null;
            this.topicid="";
          }
  )
}
else{this.fields  = null;
     this.subjects = null;
      this.topics=null;
     this.domainid="";
     this.fieldid="";
      this.subjectid="";
     this.topicid="";
}
}
onChangeField(fId : number){
  if(fId){
    console.log(fId);
    this.fieldid=fId.toString();
  data=>console.log('Success',fId)
  this._subjectService.getSubject(fId)
    .subscribe(
      data=> {
           this.subjects = data;
           this.topics=null;
            this.topicid="";
      },
       error=> {
            this.subjects = null;
             this.topics=null;
            this.topicid="";
          }
  )
}
else{
     this.subjects = null;
      this.topics=null;
      this.fieldid="";
       this.subjectid="";
      this.topicid="";
}
}


onChangeSubject(sId : number){
  if(sId){
    console.log(sId);
    this.subjectid=sId.toString();
  data=>console.log('Success',sId)
  this._topicService.getTopic(sId)
    .subscribe(
      data=> {
           this.topics=data;
            this.topicid="";
      },
       error=> {
             this.topics=null;
            this.topicid="";
          }
  )
}
else{
      this.topics=null;

      this.fieldid="";
       this.subjectid="";
      this.topicid="";
}
}
isRole(){
    let role = JSON.parse(localStorage.getItem('currentUser')).role;
if(role !== "Creator")
return true;
else return false;

}
}
