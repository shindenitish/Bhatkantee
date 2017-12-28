import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { CreatePage } from '../pages//create/create';
import { ProfilePage } from '../pages//profile/profile';
import { NotificationsPage } from '../pages//notifications/notifications';

import { AboutUsPage } from '../pages/about-us/about-us';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HeaderComponent } from '../components/header/header';

@NgModule({
  declarations: [
    MyApp,
    
    TabsPage,
    HomePage,
    ExplorePage,
    CreatePage,
    ProfilePage,
    NotificationsPage,
    
    AboutUsPage,
    SettingsPage,
    HelpPage,

    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    TabsPage,
    HomePage,
    ExplorePage,
    CreatePage,
    ProfilePage,
    NotificationsPage,

    AboutUsPage,
    SettingsPage,
    HelpPage,

    HeaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
