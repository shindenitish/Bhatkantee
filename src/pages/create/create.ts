import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HeaderComponent } from '../../components/header/header'

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
