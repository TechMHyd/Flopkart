import { Component } from '@angular/core';

import { NavController,ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms'; 

import { RegisterNewService } from '../../shared/shared-pages';
import { LoginPage } from '../pages.export';

@Component({
  selector: 'register-page',
  templateUrl: 'register.page.html'
})
export class RegisterPage {

  registrationInputs= {
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phnumber:'',
    address:''
  };
   serviceMsg: string;

  constructor(public navCtrl: NavController,
              public _formBuilder:FormBuilder,
              private _registerNewService: RegisterNewService,
              public _toastr:ToastController) {
    
  }
authForm = this._formBuilder.group({
      'name':[null,Validators.compose([Validators.required])],
      'password': [null,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])],
      'email' : [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
		  'fname': [null,Validators.compose([Validators.required])],
      'lname':[null,Validators.compose([Validators.required])],
      'cellNo':[null,Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'address':[null,Validators.compose([Validators.required])],
		})
        
  register(){
    console.log(this.registrationInputs);
      this._registerNewService.doRegister(this.registrationInputs)
                              .subscribe(
                                data => {
                                  this.serviceMsg = data._body;
                                  this.presentToast(this.serviceMsg);
                                  if(this.serviceMsg === 'Customer Details saved sucessfully'){
                                      this.navCtrl.push(LoginPage);
                                  }
                                }
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
