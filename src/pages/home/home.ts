import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HeaderComponent } from '../../components/header/header'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

}
