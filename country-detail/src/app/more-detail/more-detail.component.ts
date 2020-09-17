import { Component, OnInit } from '@angular/core';
import {CountryDetails} from '../CountryDetails';
import {CountryService} from '../country.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.css']
})
export class MoreDetailComponent implements OnInit {
  country : CountryDetails;
  constructor(private activatedRoute : ActivatedRoute,private countryService : CountryService) { }

  ngOnInit(): void {
  }


}
