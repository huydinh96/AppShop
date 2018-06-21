import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { productRoute } from './products.routes';

import { ProductsItemComponent } from './products-item/products-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';

@NgModule({
    declarations: [
        ProductsItemComponent,
        ProductsListComponent,
        ProductDetailComponent,
        ProductsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(productRoute),
    ],
})

export class ProductModule { }
