import { Component, OnInit } from '@angular/core';
import { Domain } from './domain';
import{DomainServiceService} from './domain-service.service';
@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
domainModel = new Domain("");
  constructor(private _domainService : DomainServiceService) { }

  ngOnInit() {

  }

  onSubmit(){
    this._domainService.createDomain(this.domainModel)
      .subscribe(
        data=>{console.log('Success',data);
         alert("Submitted Successfully");
         this.domainModel.domainName=null;
      }
    )
  }

}
