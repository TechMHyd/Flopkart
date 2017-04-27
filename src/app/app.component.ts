import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage,ProductsPage,AppHomePage,ContactPage } from '../pages/pages.export';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
  rootPage:any = HomePage;
  customerName:any;
  customerUserName: any;
  
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.getName()
    });
  }

  ionViewDidLoad(){
   
  }

  getName(){
    this.customerName = localStorage.getItem("name");
    return this.customerName;
  }

  getUserName(){
    this.customerUserName = localStorage.getItem("username");
    return this.customerUserName;
  }

  goToHome(){
    this.nav.push(AppHomePage);
  }

  goToProducts(){
    this.nav.push(ProductsPage);
  }

  goToContact(){
    this.nav.push(ContactPage);
  }

  logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("address");
    localStorage.removeItem("name");
    localStorage.removeItem("username");
    this.nav.popToRoot();
  }
}

