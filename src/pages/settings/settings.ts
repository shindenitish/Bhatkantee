import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HeaderComponent } from '../../components/header/header'
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private authService: AuthProvider) {
  }

  ionViewCanEnter(){
    if(this.authService.userState() == null){
      return false;
    }
    else{
      return true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
}
