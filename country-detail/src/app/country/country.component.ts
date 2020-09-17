import { Component, OnInit } from '@angular/core';
import {CountryDetails} from '../CountryDetails';
import {CountryService} from '../country.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  Data : CountryDetails[]=[];
  displayedColumns : string[]=[
    'name','capital','population','area'
  ];

  dataSource = new MatTableDataSource<CountryDetails>(this.Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;

  constructor(private countryService :CountryService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}
  getAllData(){
    this.countryService.getCountries().subscribe(dataa=>this.dataSource.data=dataa as CountryDetails[]);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
