import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PocasiProvider {
  apiKey = '4b1f6959f47473915fb1e08d553cee60';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello PocasiProvider Provider');
    this.url = 'api.openweathermap.org/data/2.5/weather?q=London&APPID='+this.apiKey+'';
  }

  getPocasi(city){
    return this.http.get(this.url+'/'+city+'.json');
  }

}
