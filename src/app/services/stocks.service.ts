import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Stock } from '../models/stock';

@Injectable()
export class StocksService {

  stocksUrl: string = 'https://staging-api.brainbase.com/stocks.php';

  constructor(private http: HttpClient) { }


  getStocks() {
    /* Currently the URL header was not accessible
    Also change field was missing    
    
    return this.http.get<Stock[]>(this.stocksUrl);
    
    */
    return [
      { symbol: "AAPL", name: "Apple", price: 1000, change: 12 },
      { symbol: "MSFT", name: "Microsoft", price: 250, change: 19 },
      { symbol: "WFC", name: "Wells Fargo & Company Common Stock", price: 28, change: 16 },
      { symbol: "UBER", name: "Uber", price: 41, change: 18 },
      { symbol: "LYFT", name: "Lyft", price: 57, change: 32 }
    ];
  }
}
