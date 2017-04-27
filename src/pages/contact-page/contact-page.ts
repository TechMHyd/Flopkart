import { Component } from '@angular/core';
import { NavController, NavParams,MenuController } from 'ionic-angular';


@Component({
  selector: 'page-contact-page',
  templateUrl: 'contact-page.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _menuController:MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  toggleMenu(){
      this._menuController.open();
    }
}
