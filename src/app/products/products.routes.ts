import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
export const productRoute: Routes = [
    { path: '', component: ProductsComponent },
];
