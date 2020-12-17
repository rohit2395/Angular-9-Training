import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductModel } from 'src/app/models/product.model';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  
  currencyObservable: Observable<string>;
  // currencySubscription: Subscription;
  
  selectedCurrencyCode: string;


  pList: ProductModel[] = [{
    productId: 1000,
    productName: 'Shoe 1',
    productPrice: 14999.7234,
    prodoctStock: true,
    productImage: 'assets/shoes.jpeg'
  }, {
    productId: 1001,
    productName: 'Shoe 2',
    productPrice: 19999.50,
    prodoctStock: false,
    productImage: 'assets/shoes.jpeg'
  }, {
    productId: 1002,
    productName: 'Shoe 3',
    productPrice: 74999,
    prodoctStock: true,
    productImage: 'assets/shoes.jpeg'
  }]

  constructor(private productService: ProductService, private currencyService: CurrencyService) {

  }


  ngOnInit(): void {

    // this.getCode();
    this.currencyObservable = this.currencyService.currency$;
    this.productService.getProducts().subscribe(data => {
      console.log(data);

      this.pList = data;
    }, error => {

    });

  }


  ngOnDestroy(): void {
    // this.currencySubscription.unsubscribe();
  }

  //another way to subscribe to a service!
  getCode() {
    // this.currencySubscription = this.currencyService.currency$.subscribe((code) => (this.selectedCurrencyCode = code));
  }

}
