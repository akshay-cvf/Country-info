import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CountryDetails } from './CountryDetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = 'https://restcountries.eu/rest/v2/all';
  private miniUrl = 'https://restcountries.eu/rest/v2/name/';
  constructor(private http:HttpClient) {
  }

   getCountries(){
    return this.http.get(this.url);
   }


   getCountry(namePara : string) : Observable<CountryDetails>{
     return this.http.get<CountryDetails>(this.miniUrl+namePara+"?fullText=true");



}}
