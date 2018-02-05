import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

import { HomePage } from '../home/home';
import { ExplorePage } from '../explore/explore';
import { CreatePage } from '../create/create';
import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = CreatePage;
  tab4Root = ProfilePage;
  tab5Root = NotificationsPage;

  constructor(public menu:MenuController) {
    this.menu = menu;
    this.menu.enable(true, 'myMenu')
  }
}
