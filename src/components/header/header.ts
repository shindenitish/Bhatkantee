import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  flag=false;

  constructor() {}

  searchBar(){
    this.flag=true;
  }
}
