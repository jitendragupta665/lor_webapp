import { Component, OnInit } from '@angular/core';
import{FieldServiceService} from './field-service.service';
import { Field } from './field';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
domains:any = [];
fields:any=[];
domainid:any;
fieldModel =  new Field("");
  constructor(private _fieldService : FieldServiceService) { }

  ngOnInit() {
    this._fieldService.getDomain()
      .subscribe(
        data=>this.domains=data
    )
  }

    onChangeDomain(id:number){
      if(id){
        this.domainid = id;
      this._fieldService.getField(id)
        .subscribe(
          data=>this.fields=data,
          errr => this.fields = null
      )
  }else{
    this.fields = null;
  }
    }
    onSubmit(){
      if(this.domainid){
    this._fieldService.createField(this.fieldModel,this.domainid)
      .subscribe(
        data=>{console.log('Success',data);
        this.onChangeDomain(this.domainid);
               alert("Submitted Successfully");
               this.fieldModel.fieldName="";

      }

    )
  }
    }

}
