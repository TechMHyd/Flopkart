import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

import { AppHomePage } from '../pages.export';
import { OrderService } from '../../shared/shared-pages';

@Component({
  selector: 'page-buynow-page',
  templateUrl: 'buynow-page.html'
})
export class BuynowPage {

  orderDetails:any={
    qty: '',
    totalamt: '',
    deliveryAddr: '',
    product:{
      itemName:''
    }

  };
   username:any;
   billingAddress:any;
   customerName:any;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _formBuilder:FormBuilder,
              public _orderService:OrderService,
              public _toastr:ToastController) {}

   

  ionViewDidLoad() {
    this.orderDetails = this.navParams.data;
    console.log(this.orderDetails);
    this.username = localStorage.getItem("username");
    this.billingAddress = localStorage.getItem("address");
    this.customerName = localStorage.getItem("name");
  }
 

  proceed(){
     let data={
        username: this.username,
        paymentMode: 'Cash On Delivery',
        billingAddress: this.billingAddress,
        deliveryAddr:this.orderDetails.deliveryAddr,
        orderQuantity: this.orderDetails.qty,
        totalamt: this.orderDetails.totalamt,
        productid:this.orderDetails.product.id,
        jwttoken: localStorage.getItem("jwt")
      }

      this._orderService.placeOrder(data)
                        .subscribe(
                          data =>{
                            if(data._body){
                                this.presentToast("Order Confirmed! will dispatch shortly");
                                this.navCtrl.push(AppHomePage);
                            }else{
                                this.presentToast("Sorry! Failed to confirm order. Please try again");
                            }
                          } ,
                          error => console.log("_orderService::"+error)
                        )
  }

  presentToast(msg) {
      let toast = this._toastr.create({
        message: msg,
        duration: 3000
      });
      toast.present();
    }
}
