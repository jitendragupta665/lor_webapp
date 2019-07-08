import { Component, OnInit } from '@angular/core';
import { Level } from '../level/level';
import {Taxo} from '../taxonomy/taxo'
import { Verb } from './verb';
import{VerbServiceService} from './verb-service.service';



@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {

  verbModel = new Verb("");
  constructor( private _verbService : VerbServiceService) { }
  taxonomies:any;
  levels:any = [];
  verbs:any=[];
  taxoid:any=null;
  levelid:any=null;
  ngOnInit() {
    this._verbService.getTaxo()
      .subscribe(
        data=>this.taxonomies=data
    )
  }

  onChangeTaxo(id:number){
    if(id){
    this.taxoid=id;
    this._verbService.getLevel(id)
      .subscribe(
        data=>{this.levels=data;
        this.verbs = null;}
    )
}else{
  this.levels = null;
  this.verbs= null;
}
  }
  onChangeLevel(id:number){
    if(id){
    this.levelid=id;
    this._verbService.getVerb(id)
      .subscribe(
        data=>this.verbs=data,
         error =>this.verbs = null
    )
}else{
  this.verbs = null;
}
  }
  onSubmit(){
    if(this.taxoid && this.levelid){
  this._verbService.createVerb(this.verbModel,this.levelid)
    .subscribe(
      data=>{console.log('Success',data);
        this.onChangeLevel(this.levelid);
              alert("Submitted Successfully");
              this.verbModel.verbName=null;

    }

  )
}
}
}

/*
  if(this.taxoid && this.levelid)
  this.onChangeTaxo(this.taxoid);
  this.onChangeLevel(this.levelid);
  */
