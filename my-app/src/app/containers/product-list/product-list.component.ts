import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  @Input() selectedCurrencyCode : string;


  pList:ProductModel[] = [{
    productId:1000,
    productName:'Shoe 1',
    productPrice:14999.7234,
    prodoctStock:true,
    productImage:'assets/shoes.jpeg'
  },{
    productId:1001,
    productName:'Shoe 2',
    productPrice:19999.50,
    prodoctStock:false,
    productImage:'assets/shoes.jpeg'
  },{
    productId:1002,
    productName:'Shoe 3',
    productPrice:74999,
    prodoctStock:true,
    productImage:'assets/shoes.jpeg'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
