import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PocasiProvider} from '../../providers/pocasi/pocasi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pocasi:any;
  location:{
    city:string
  }

  constructor(public navCtrl: NavController, private pocasiProvider:PocasiProvider) {

  }

  ionViewWillEnter(){
    this.location = {
      city: 'Calgary' 
    }

    this.pocasiProvider.getPocasi(this.location.city)
    .subscribe(pocasi => {
      console.log(pocasi);
    });
  }

}
