import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'turtle-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.scss']
})
export class ProductLandingComponent implements OnInit {

  checked = false;

  products = [
    {
      id: 2,
      name: 'emapanada',
      price: 200,
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    },
    {
      id: 3,
      name: 'hamburguesa',
      price: 200,
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    },
    {
      id: 4,
      name: 'tamal',
      price: 200,
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    },
    {
      id: 5,
      name: 'emapanada',
      price: 200,
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    },
  ];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.store.select('products').subscribe(
      products => {
        if (products) {
          this.checked = products.showDoggos;
        }
        console.log(products);
      }
    );
  }

  onChange(state: boolean): void {
    this.store.dispatch({
      type: '[Products] Toggle doggos view'
    });
    this.checked = state;
  }

}
