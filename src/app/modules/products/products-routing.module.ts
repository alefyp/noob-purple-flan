import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLandingComponent } from './product-landing/product-landing.component';

const routes: Routes = [
  {
    path: '',
    component: ProductLandingComponent,
    children: [
      {
        path: 'id',
        component: ProductLandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }


