import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AboutUsPage } from '../pages/about-us/about-us';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any ;

  //MENU Pages
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,  afAuth: AngularFireAuth) {
    afAuth.authState.subscribe( user => {
      if(user){
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
    }); 

    this.initializeApp();

    //Side MENU Pages
    this.pages = [
      { title: 'About Us', component: AboutUsPage },
      { title: 'Help', component: HelpPage },
      { title: 'Settings', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
