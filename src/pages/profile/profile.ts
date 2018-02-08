import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';

import { AuthProvider } from '../../providers/auth/auth';
import { CommonServicesProvider } from '../../providers/common-services/common-services';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private email;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private authService: AuthProvider, private common: CommonServicesProvider) {
    this.getUserInfo();
  }

  ionViewCanEnter(){
    return this.authService.authenticated();
  }

  getUserInfo(){
    var user = firebase.auth().currentUser;

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
    var user = firebase.auth().currentUser;
    
    this.authService.logoutUser().then( authData => {
      this.navCtrl.setRoot(LoginPage);
    }, error => {
        this.common.showBasicAlert('Error', error.message);        
    });
  }
}
