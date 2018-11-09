import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nastaveni } from './nastaveni';

@NgModule({
  declarations: [
    Nastaveni,
  ],
  imports: [
    IonicPageModule.forChild(Nastaveni),
  ],
})
export class NastaveniPageModule {}
