import { Component, OnInit, Input } from '@angular/core';
import { CountryCodeService } from '../country-code.service';
import { CrPair } from '../crPair';
import { CountryDetail } from '../countryDetail';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private _passedInCurrency:CrPair = {code:'', rate:0};
  public loading:Boolean = false;
  public countryDetails: CountryDetail[] = [];
  public currencyDetails = {name:''};

  @Input() 
  set passedInCurrency(value: CrPair) {
    if(value.code !== '') {
      this.loading = true;
      this._passedInCurrency = value;
      console.log(this._passedInCurrency);
      this.countryCodeService.getDetailFromCountryCode(this._passedInCurrency['code'])
        .subscribe(
          res => {
            this.currencyDetails = res[0]['currencies'][0];
            for(let i = 0; i < res.length; i++) {
              this.countryDetails.push(res[i]);
            }
            this.loading = false;
          }
        )
      }
    }
      
  get passedInCurrency():CrPair {
    return this._passedInCurrency;
  }

  constructor(private countryCodeService:CountryCodeService) { }

  ngOnInit() {

  }


}
