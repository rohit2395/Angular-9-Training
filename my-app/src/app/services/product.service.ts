import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { 
  }

     
  getProducts():Observable<ProductModel[]>{
    const endPoint = 'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.http.get<ProductModel[]>(endPoint);
  }
}
