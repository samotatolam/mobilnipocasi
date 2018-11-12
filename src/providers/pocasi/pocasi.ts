import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HomePage } from '../../pages/home/home';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Injectable()
export class PocasiProvider {
  apiKey = '4b1f6959f47473915fb1e08d553cee60';
  town = 'Paris';
  
  url;
  url_prvni;
  url_druha;

  
  

  

  constructor(public http: HttpClient) {
    console.log('Hello PocasiProvider Provider');
    //this.url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.town+'&appid='+this.apiKey+'';
    
    this.url_prvni = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.url_druha = '&appid='+this.apiKey+'';
    
  }



  getPocasi(city){
    
    return this.http.get(this.url_prvni+city+this.url_druha);
    
   //return this.http.get(this.url);
  }

}
