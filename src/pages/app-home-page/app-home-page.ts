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
      url:'http://www.shopaholicindians.com/wp-content/uploads/2014/11/PAytm-Shoes-and-Offer-at-shopaholic-Indians.png'
    },
    {
      url:'http://www.shopaholicindians.com/wp-content/uploads/2014/11/PAytm-Shoes-and-Offer-at-shopaholic-Indians.png'
    },
    {
      url:'http://www.shopaholicindians.com/wp-content/uploads/2014/11/PAytm-Shoes-and-Offer-at-shopaholic-Indians.png'
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
