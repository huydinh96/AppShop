import { Routes } from '@angular/router';
export const appRoute: Routes = [
    {
        path: '',
        redirectTo: '/product',
        pathMatch: 'full',
    },
    { path: 'product', loadChildren: './products/products.module#ProductModule' },
];
