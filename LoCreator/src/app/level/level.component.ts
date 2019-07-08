import { Component, OnInit } from '@angular/core';
import{LevelServiceService} from './level-service.service';
import { Level } from './level';
import {Taxo} from '../taxonomy/taxo'

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  levelModel = new Level("","");
  constructor( private _levelService : LevelServiceService) { }
  taxonomies:any;
  levels:any = [];
  taxoid:any;
  ngOnInit() {
    this._levelService.getTaxo()
      .subscribe(
        data=>this.taxonomies=data
    )
  }

  onChangeTaxo(id:number){
    if(id){
      this.taxoid = id;
      console.log(id);
    this._levelService.getLevel(id)
      .subscribe(
        data=>this.levels=data,
        errr => this.levels = null
    )
}else{
  this.levels = null;
}
  }
  onSubmit(){
    if(this.taxoid){
  this._levelService.createLevel(this.levelModel,this.taxoid)
    .subscribe(
      data=>{console.log('Success',data);
      this._levelService.getLevel(this.taxoid)
        .subscribe(
          data=>this.levels=data,
          errr => this.levels = null
      )
         alert("Submitted Successfully");
         this.levelModel.levelName="";
          this.levelModel.levelDescription="";

    }

  )
}
  }
}
