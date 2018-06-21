import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../providers/products.service';
import { Products } from '../interface/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  public products: Products[];
  public subcription: Subscription;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.subcription = this.productService.getProducts().subscribe((data: Products[]) => {
      this.products = data;
      console.log(this.products);
    }, error => {
      console.log(error);
    });
  }

}
