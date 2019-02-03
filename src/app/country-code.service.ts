import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountryCodeService {
  getDetailFromCountryCode = (code) => {
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/currency/' + code);
  }

  constructor(private http:HttpClient) { }
}
