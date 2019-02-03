import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatesService {
  private today:Date = new Date();

  getToday = () => {
    return this.today;
  }

  getRates = () => {
    return this.http.get('https://api.exchangeratesapi.io/latest?base=NZD');
  }

  constructor(private http:HttpClient) { }
}
