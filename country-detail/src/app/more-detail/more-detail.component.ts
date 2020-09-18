import { Component, OnInit ,Input} from '@angular/core';
import {CountryDetails} from '../CountryDetails';
import {CountryService} from '../country.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CountryComponent } from '../country/country.component';
@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.css']
})
export class MoreDetailComponent implements OnInit {


  elem : CountryDetails;
  constructor(private route : ActivatedRoute,private countryService : CountryService) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const namePara= this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(namePara)
      .subscribe(elem=> this.elem = elem[0]);

  }
  /*getData(){
    console.log(this.objData);
  }
*/



}
