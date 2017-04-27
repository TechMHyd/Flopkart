import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage,AppHomePage,LoginPage } from '../pages.export';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private _navController:NavController){}
  
  fbLogIn(){
    alert("FB");
  }

  oldSchoolLogIn(){
    this._navController.push(LoginPage);
  }

  register(){
    this._navController.push(RegisterPage);
  }
}
