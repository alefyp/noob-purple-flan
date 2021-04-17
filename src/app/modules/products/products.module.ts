import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { ProductsRoutingModule } from './products-routing.module';

/* NGRx */
import { Store, StoreModule } from '@ngrx/store';

/* Material */
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    ProductLandingComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    StoreModule.forFeature('products', {})
  ]
})
export class ProductsModule { }
