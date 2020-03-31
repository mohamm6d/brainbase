import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service'
import { Stock } from '../../models/stock';


@Component({
  selector: 'app-stocks', 
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  providers: [StocksService]

})
export class StocksComponent implements OnInit {
  stocks:Stock[];
  dayNumber:number = 1;
  todayDate:Date = new Date();
  

  constructor(private stocksService: StocksService) { 
    
  }

  ngOnInit(): void {
    this.stocks = this.stocksService.getStocks();

    //If data was working from URL
    /*
    this.stocksService.getStocks().subscribe(stocks => {
      this.stocks = stocks;
    }); 
    */
    
  }

  public nextDay():void {
    this.dayNumber++;
    this.todayDate = new Date(this.todayDate.setDate(this.todayDate.getDate() + 1));
  }

  roundNumber(Str:string){
    return parseFloat(Str).toFixed(2);
  }

}
