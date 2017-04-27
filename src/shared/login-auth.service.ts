import { Injectable } from '@angular/core';
import { Http,Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    baseUrlJwt= 'http://10.56.166.100:8000/loginService/generateToken';
    baseUrlValidateLogin = 'http://10.56.166.100:8086/customerService/login';
    generatedToken:any;

    constructor(private _http:Http) { }

    createJwt(data):Observable<any>{
        return this._http.post(this.baseUrlJwt,data)
                .map((response:Response) =>{
                    this.generatedToken = response;
                    return this.generatedToken; 
                });
    }

    validateLogin(data):Observable<any>{
        let headers = new Headers({ 'jwtToken': localStorage.getItem("jwt") });
         let options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseUrlValidateLogin,data,options)
                    .map((response:Response) =>{
                        return response;
                    })
    }    
}