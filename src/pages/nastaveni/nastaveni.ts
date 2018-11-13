import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-nastaveni',
  templateUrl: 'nastaveni.html',
})
export class Nastaveni {
  city: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage) {

      this.storage.get('location').then((hod) => {
        if(hod != null){
          let location = JSON.parse(hod);
          this.city = location.city;  
        } else {
          this.city = 'Prague';
        }
      });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Nastaveni');
  }

}
