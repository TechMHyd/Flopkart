import { Component } from '@angular/core';
import { NavController, NavParams,MenuController,LoadingController,ToastController } from 'ionic-angular';

import { ProductsService } from '../../shared/shared-pages';
import { SpecificProductPage } from '../pages.export';

@Component({
  selector: 'page-products-page',
  templateUrl: 'products-page.html'
})
export class ProductsPage {

  allProducts:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _productsService:ProductsService,
              public _menuController:MenuController,
              public _loadingController:LoadingController,
              public _toastr:ToastController ) {}

   toggleMenu(){
    this._menuController.open();
  }           

  ionViewDidLoad() {
    let loader = this._loadingController.create({
            content: "Loading..."
        });
        loader.present().then(() =>{
            this._productsService.getAllProducts()
                         .subscribe(
                           data=> {
                             this.allProducts = JSON.parse(data._body);
                             for(let i=0;i<this.allProducts.length;i++){
                               this.allProducts[i].imgUrl = 'http://10.56.166.100:8000/images/'+this.allProducts[i].id+'.jpg';
                               console.log(this.allProducts);
                             }
                            },
                           error =>{
                             console.log("Error:::>>"+error);
                             this.presentToast("Error Fetching products! Please try after sometime..");
                           }     
                         )
            loader.dismiss();
})
    
  }

  goToOneProduct(product){
    this.navCtrl.push(SpecificProductPage,product)
  }

  presentToast(msg) {
    let toast = this._toastr.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
