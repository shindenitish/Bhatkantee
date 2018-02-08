import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HeaderComponent } from '../../components/header/header'
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private authService: AuthProvider) {
  }

  ionViewCanEnter(){
    return this.authService.authenticated();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
}
