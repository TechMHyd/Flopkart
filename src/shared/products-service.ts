import { Injectable } from '@angular/core';
import { Http,Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService {

    baseUrl='http://10.56.166.100:8084/products';
    
    constructor(private _http:Http) { }

    getAllProducts():Observable<any>{
        let api= '/all';
        return this._http.get(this.baseUrl+api)
                    .map((response:Response) => {
                        return response;
                    })
    }
}