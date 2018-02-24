import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';

import { AuthProvider } from '../../providers/auth/auth';
import { CommonServicesProvider } from '../../providers/common-services/common-services';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private email;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private authService: AuthProvider,
  private common: CommonServicesProvider) {
    this.getUserInfo();
  }

  ionViewCanEnter(){
    if(this.authService.userState() == null){
      return false;
    }
    else{
      return true;
    }
  }

  getUserInfo(){
    var user = this.authService.userState();

    if (user != null) {
      var name= user.displayName;
      var email = user.email;
      var photoUrl = user.photoURL;
      var emailVerified = user.emailVerified;
      var uid = user.uid;

      this.email=email;
    }
  }

  signOut(){       
    this.authService.logoutUser().then( authData => {
      this.navCtrl.setRoot(LoginPage);
    }, error => {
        this.common.showBasicAlert('Error', error.message);        
    });
  }
}
