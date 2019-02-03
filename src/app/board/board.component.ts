import { Component, OnInit} from '@angular/core';
import { RatesService } from '../rates.service';
import { CrPair } from '../crPair';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  code;
  today:Date;
  base:string;
  /* crPair =  A pair of values: Currency code and Rate */
  crPairs:CrPair[]= [];
  selectedCur:CrPair= {code:'', rate:0};

  constructor(private ratesServices:RatesService) { }

  ngOnInit() {
    this.today = this.ratesServices.getToday();
    this.ratesServices.getRates()
      .subscribe(
        res => {
          let codes = Object.keys(res['rates']);
          for(let i=0;i < codes.length; i++) {
            this.crPairs.push(new CrPair(codes[i], res['rates'][codes[i]]));
          }
          this.base = res['base'];
        }
      )
  }
  

  updateSelectedCurrency(index) {
    this.selectedCur = this.crPairs[index];
  }

}
