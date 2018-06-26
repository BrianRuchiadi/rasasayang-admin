import { Component, OnInit } from '@angular/core';
import { sortTable } from './../../../functions/datatable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./../../../styles/pages/_product.scss']
})
export class ProductComponent implements OnInit {
  products: Array<Object>;
  productsTableSortStatus: Object  = {
    name: null,
    base_price: null,
    selling_price: null,
    total_sold: null,
    total_profit: null
  };

  constructor() { }

  ngOnInit() {
    this.products = [
      {thumbnail: 'brownies.jpg', name: 'brownies', base_price: 1200.00, selling_price: 3000.00, total_sold: 50, total_profit: 90000},
      {thumbnail: 'pastel.jpg', name: 'pastel', base_price: 1000.00, selling_price: 3000.00, total_sold: 80, total_profit: 160000},
      {thumbnail: 'pisangkipas.jpg', name: 'pisang kipas', base_price: 1500.00, selling_price: 3000.00, total_sold: 70,
        total_profit: 105000}
    ];
  }

  sortData(attributes) {
    sortTable(
      this.products,
      attributes,
      this.productsTableSortStatus
    );
  }

}
