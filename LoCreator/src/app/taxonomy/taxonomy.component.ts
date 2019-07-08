import { Component, OnInit } from '@angular/core';
import{TaxoServiceService} from './taxo-service.service';
import { Taxo } from './taxo';
import { Router } from "@angular/router";

@Component({
  selector: 'app-taxonomy',
  templateUrl: './taxonomy.component.html',
  styleUrls: ['./taxonomy.component.css']
})
export class TaxonomyComponent implements OnInit {
taxoModel = new Taxo("","");
constructor(private router: Router,private _taxoService : TaxoServiceService) {}
  ngOnInit() {

  }

onSubmit(){
  this._taxoService.createTaxo(this.taxoModel)
    .subscribe(

      data=>{console.log('Success',data);
      alert("Submitted Successfully");
      this.taxoModel.taxoName="";
      this.taxoModel.taxodescription="";
    }
  )
}

}
