import { Component, OnInit } from '@angular/core';
import { sortTable } from './../../../functions/datatable';
import { NotificationService } from '../../../services/utilities/notification.service';
import { NotificationCode } from '../../../enums/notification-code';

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

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.products = [
      {id: 1, thumbnail: 'brownies.jpg', name: 'brownies', base_price: 1200.00, selling_price: 3000.00, total_sold: 50,
        total_profit: 90000, isSelected: false},
      {id: 2, thumbnail: 'pastel.jpg', name: 'pastel', base_price: 1000.00, selling_price: 3000.00, total_sold: 80,
        total_profit: 160000, isSelected: false},
      {id: 3, thumbnail: 'pisangkipas.jpg', name: 'pisang kipas', base_price: 1500.00, selling_price: 3000.00, total_sold: 70,
        total_profit: 105000, isSelected: false}
    ];
  }

  sortData(attributes) {
    sortTable(
      this.products,
      attributes,
      this.productsTableSortStatus
    );
  }

  deleteProducts() {
    const selectedProducts = this.products.filter((product) => product.isSelected === true);
    const remainedProducts = this.products.filter((product) => product.isSelected === false);

    if (!selectedProducts.length) {
      throw new Error('No product is selected');
    }

    if (confirm(`are you sure to delete these selected product?`)) {
      this.notificationService.add({type: NotificationCode.SUCCESS, message: 'you have successfully delete the selected products'})
      this.products = remainedProducts;
    }


  }


}
