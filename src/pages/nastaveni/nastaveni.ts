import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';

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
          this.city = 'Paris';
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nastaveni');
  }

  ulozForm(){
    let location = {
      city: this.city
    }
    this.storage.set('location', JSON.stringify(location));
    //navigujeme zpatky na HomePage
    this.navCtrl.push(HomePage);
  }

}
