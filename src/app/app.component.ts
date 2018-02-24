import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AboutUsPage } from '../pages/about-us/about-us';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';

import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp  implements OnInit{
  @ViewChild(Nav) nav: Nav;

  rootPage:any ;
  
  //MENU Pages
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
  public statusBar: StatusBar, 
  public splashScreen: SplashScreen,  
  private auth: AuthProvider) {

    this.initializeApp();
  
    //Side MENU Pages
    this.pages = [
      { title: 'About Us', component: AboutUsPage },
      { title: 'Help', component: HelpPage },
      { title: 'Settings', component: SettingsPage }
    ];
  }

  ngOnInit() {
    this.auth.getAuthState().subscribe((user) => {
      if(user){
        if(user.emailVerified)
        {
          this.rootPage = TabsPage;
        }
        else{
          this.rootPage = LoginPage;  
        }
      } else {
        this.rootPage = LoginPage;
      }
    });
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
