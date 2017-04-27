import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { FormBuilder,FormGroup , Validators } from '@angular/forms'; 
import { RegisterPage,AppHomePage } from '../pages.export';
import { LoginService } from '../../shared/shared-pages';


@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {

    loginForm={
    username: 'agnimitra',
    password: 'agnimitra'
  }
 generatedToken:any;

  constructor(public navCtrl: NavController,
              public _formBuilder:FormBuilder,
              private _loginService:LoginService,
              public _toastr:ToastController) {  }

  authForm = this._formBuilder.group({
       'username' : [null, Validators.compose([Validators.required])],
		   'password': [null,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])]
		})

    register(){
      this.navCtrl.push(RegisterPage);
    }

    proceed(){
      this._loginService.createJwt(this.loginForm)
              .subscribe(
                    data=> {
                        this.generatedToken=data._body;
                        localStorage.setItem("jwt",this.generatedToken);
                        this._loginService.validateLogin(this.loginForm)
                                          .subscribe(
                                            data=>{
                                               let loggedInUser = JSON.parse(data._body);
                                               if(loggedInUser){
                                                 localStorage.setItem("username",loggedInUser.username);
                                                  localStorage.setItem("name",loggedInUser.firstname+loggedInUser.lastname);
                                                  localStorage.setItem("address",loggedInUser.address);
                                                  this.navCtrl.push(AppHomePage);
                                               }else{
                                                  this.presentToast("Invalid Username/Password!");
                                               }
                                               
                                               this.resetInputs();
                                            }
                                          )
                }
                );
     }

     resetInputs(){
       this.loginForm.username = ' ';
       this.loginForm.password = '';
       this.authForm = this._formBuilder.group({
        'username' : [null, Validators.compose([Validators.required])],
		    'password': [null,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])]
		})
     }

     presentToast(msg) {
      let toast = this._toastr.create({
        message: msg,
        duration: 3000
      });
      toast.present();
    }

}
