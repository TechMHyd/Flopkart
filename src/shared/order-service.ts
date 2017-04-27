import { Injectable } from '@angular/core';
import { Http,Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderService {

    baseUrl='http://10.56.166.100:8088/orders'

    constructor(private _http:Http) { }

    placeOrder(data):Observable<any>{
        let api='/createOrder';
         let headers = new Headers({ 'jwttoken': localStorage.getItem("jwt") });
         let options = new RequestOptions({ headers: headers });

        return this._http.post(this.baseUrl+api,data,options)
                         .map((response:Response)=>{
                             return response;
                         })
    }
}