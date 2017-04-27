import { Injectable } from '@angular/core';
import { Http,Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class RegisterNewService {

    baseUrl= 'http://10.56.166.100:8086/customerService/registerCustomer';

    constructor(private _http: Http) { }

    doRegister(data):Observable<any>{
        return this._http.post(this.baseUrl,data)
                        .map((response:Response)=>{
                            return response;
                        })
    }
}