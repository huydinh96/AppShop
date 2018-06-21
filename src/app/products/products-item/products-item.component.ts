import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../interface/Product';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent implements OnInit {
  @Input() product: Products;
  @Output() getProduct = new EventEmitter<Products>();
  public kt = true;
  constructor() { }

  ngOnInit() {

  }
  addToCart(product: any) {
    const kt = this.product.sales;
    const hd = kt.toString();
    if (hd === 'true') {
      console.log(this.product);
      this.getProduct.emit(product);
    } else {
      alert('hết hàng rồi!');
    }
  }

}

