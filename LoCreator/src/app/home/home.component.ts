import { Component, OnInit } from '@angular/core';
import{HomeServiceService} from './home-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
los:any=[];
  constructor(private _homeService : HomeServiceService) { }

  ngOnInit() {
    this.getLearningObjective();
  }
   getLearningObjective(){

     this._homeService.getLo()
       .subscribe(
         data=> this.los = data,
         data=>console.log('Success',data)

     )

   }
}
