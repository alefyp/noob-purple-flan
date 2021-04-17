import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLandingComponent } from './components/product-landing/product-landing.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';


/* NGRx */
import { Store, StoreModule } from '@ngrx/store';

/* Material */
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { productsReducer } from './state/products.reducer';


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
    FormsModule,
    StoreModule.forFeature('products', productsReducer)
  ]
})
export class ProductsModule { }
