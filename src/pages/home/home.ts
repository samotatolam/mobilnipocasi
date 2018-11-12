import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PocasiProvider} from '../../providers/pocasi/pocasi';
import 'rxjs/add/operator/map';
import {Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pocasi:any;
  temperature: any;
  location:{
    city:string
  }
  
  constructor(public navCtrl: NavController, 
    private pocasiProvider:PocasiProvider,
    private storage:Storage) {

  }

  ionViewWillEnter(){
    
    
    this.location = {
      city: 'Prague' 
    } 

    this.pocasiProvider.getPocasi(this.location.city)
    .subscribe(pocasi => {
      //console.log(pocasi);
      this.pocasi = pocasi.name;
    });


    this.pocasiProvider.getPocasi(this.location.city)
 
    .subscribe(pocasi => {
      //console.log(pocasi);
      this.temperature = pocasi.main.temp;
    });


  }

}
