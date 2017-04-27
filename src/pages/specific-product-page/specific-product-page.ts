import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { BuynowPage } from "../pages.export";


@Component({
  selector: 'page-specific-product-page',
  templateUrl: 'specific-product-page.html'
})
export class SpecificProductPage {

  productDetails:any=[];
  pageTitle:string;
  qty: number;
  deliveryAddr: string;
  maxOrderFlag: boolean=false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _menuController:MenuController) {}

   toggleMenu(){
    this._menuController.open();
  }             

  ionViewWillEnter() {
    this.productDetails = this.navParams.data;
    this.pageTitle = this.productDetails.itemName;
  }

  buyNow(){
    let cost = (this.productDetails.cost)*(this.qty)
    let orderDetails = {
      product: this.productDetails,
      qty: this.qty,
      deliveryAddr: this.deliveryAddr,
      totalamt: cost
    }
    if(this.qty <= this.productDetails.availableitems){
      this.maxOrderFlag = false;
      this.navCtrl.push(BuynowPage,orderDetails);
    }
    else{
      this.maxOrderFlag = true;
    }
    
  }

}
