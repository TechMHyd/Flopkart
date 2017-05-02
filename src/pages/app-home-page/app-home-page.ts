import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { ProductsPage } from '../pages.export';

@Component({
  selector: 'page-app-home-page',
  templateUrl: 'app-home-page.html'
})
export class AppHomePage {

  customerName:any;

  slides=[
    {
      url:'http://www.shopaholicindians.com/wp-content/uploads/2014/11/PAytm-Shoes-and-Offer-at-shopaholic-Indians.png'
    },
    {
      url:'https://www.travelguru.com/offers/affiliate-promo/images/great-shopping-deals.jpg'
    },
    {
      url:'http://www.fridayblockbuster.com/wp-content/uploads/2015/06/banner6april.jpg'
    },
    {
      url:'http://cdn.shopclues.net/images/mailer/clearance_191215/clerance_salebanner.jpg'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,public _menuController: MenuController) {}

  ionViewDidLoad() { }

  goToProducts(){
    this.navCtrl.push(ProductsPage);
  }

  toggleMenu(){
    this._menuController.open();
  }

}
