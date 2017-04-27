import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RegisterPage, HomePage,AppHomePage,LoginPage,ProductsPage,SpecificProductPage,BuynowPage,ContactPage} from '../pages/pages.export';
import { LoginService,ProductsService,OrderService,RegisterNewService } from '../shared/shared-pages';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    AppHomePage,
    LoginPage,
    ProductsPage,
    SpecificProductPage,
    BuynowPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    AppHomePage,
    LoginPage,
    ProductsPage,
    SpecificProductPage,
    BuynowPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    ProductsService,
    OrderService,
    RegisterNewService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
