import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'turtle-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.scss']
})
export class ProductLandingComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
