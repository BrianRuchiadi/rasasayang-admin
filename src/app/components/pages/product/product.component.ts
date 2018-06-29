import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { sortTable } from './../../../functions/datatable';
import { NotificationService } from '../../../services/utilities/notification.service';
import { NotificationCode } from '../../../enums/notification-code';
import { previewSingleImageThumbnail, removeSingleImageThumbnail } from '../../../functions/image-handler';
import { multipleCheckbox } from '../../../functions/multiple-checkbox';
import { NavigationSliderService } from '../../../services/utilities/navigation-slider.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./../../../styles/pages/_product.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('imageFile') imageFile: ElementRef;

  newProduct: any = {
    thumbnail: null,
    name: null,
    base_price: null,
    selling_price: null
  };
  originalProducts: Array<Object>;
  products: Array<Object>;
  productsTableSortStatus: any  = {
    name: null,
    base_price: null,
    selling_price: null,
    total_sold: null,
    total_profit: null
  };

  elementThumbnailPreview: any;
  elementThumbnail: any;
  elementContent: any;

  isDeleteProductModalOpen: any = false;

  productSelectedStart: any = null;
  productSelectedEnd: any = null;

  productSearch: any = '';

  constructor(
    private notificationService: NotificationService,
    private navigationSliderService: NavigationSliderService
  ) { }

  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      if (event.keyCode === 16 && this.productSelectedEnd) {
        multipleCheckbox(
          this.productSelectedStart,
          this.productSelectedEnd,
          this.products
        );
      }
    }

  ngOnInit() {
    this.products = [
      {id: 1, thumbnail: 'brownies.jpg', name: 'brownies', base_price: 1200.00, selling_price: 3000.00, total_sold: 50,
        total_profit: 90000, isSelected: false},
      {id: 2, thumbnail: 'pastel.jpg', name: 'pastel', base_price: 1000.00, selling_price: 3000.00, total_sold: 80,
        total_profit: 160000, isSelected: false},
      {id: 3, thumbnail: 'pisangkipas.jpg', name: 'pisang kipas', base_price: 1500.00, selling_price: 3000.00, total_sold: 70,
        total_profit: 105000, isSelected: false},
      {id: 4, thumbnail: 'pisangnugget.jpg', name: 'pisang nugget', base_price: 2000.00, selling_price: 5000.00, total_sold: 40,
        total_profit: 120000, isSelected: false}
    ];
    this.originalProducts = JSON.parse(JSON.stringify(this.products));
    this.initElementSelector();
    this.observeBurgerState();
  }

  initElementSelector() {
    this.elementContent = document.getElementById('content');
    this.elementThumbnail = document.getElementById('thumbnail');
    this.elementThumbnailPreview = document.getElementById('thumbnail-preview');
  }

  observeBurgerState() {
    this.navigationSliderService.slideStateObservable.subscribe(
      (state) => {
        if (!state) {
          this.elementContent.style.width = '100vw';
          return;
        }

        this.elementContent.style.width = 'calc(100vw - 200px)';
      }
    );
  }

  sortData(attributes) {
    sortTable(
      this.products,
      attributes,
      this.productsTableSortStatus
    );
  }

  previewThumbnail(elementThumbnail, elementThumbnailPreview) {
    previewSingleImageThumbnail(
      elementThumbnail,
      elementThumbnailPreview,
      this.imageFile.nativeElement.files[0]
    );
  }

  deleteThumbnail(elementThumbnail, elementThumbnailPreview) {
    this.newProduct.thumbnail = null;
    removeSingleImageThumbnail(
      elementThumbnail,
      elementThumbnailPreview
    );
  }

  triggerProductSearch(ev) {
    const val = ev.target.value;
    this.products = this.originalProducts;

    if (!val || val.trim() === '') {
      return;
    }

    this.products = this.products.filter(
      (product: any) => {
        return (
          product.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          product.base_price.toLocaleString().indexOf(val.toLowerCase()) > -1 ||
          product.selling_price.toLocaleString().indexOf(val.toLowerCase()) > -1 ||
          product.total_sold.toLocaleString().indexOf(val.toLowerCase()) > -1 ||
          product.total_profit.toLocaleString().indexOf(val.toLowerCase()) > -1
        );
      }
    );
  }

  productChecked(product) {
    const checkedProduct = this.products.filter((prod: any) => prod.isSelected === true);
    if (!checkedProduct.length) {
      this.productSelectedStart = null;
      this.productSelectedEnd = null;
      return;
    }

    if (!this.productSelectedStart) {
      this.productSelectedStart = product.id;
    } else {
      this.productSelectedEnd = (this.productSelectedStart === product.id) ? null : product.id;
    }
  }

  showDeleteProductsModal() {
    const selectedProducts = this.products.filter((product: any) => product.isSelected === true);

    if (!selectedProducts.length) {
      throw new Error('No product is selected');
    }

    this.isDeleteProductModalOpen = true;
  }

  dismissDeleteProductsModal() {
    this.isDeleteProductModalOpen = false;
  }

  confirmDeleteProductsModal() {
    const remainedProducts = this.products.filter((product: any) => product.isSelected === false);

    this.notificationService.add({type: NotificationCode.SUCCESS, message: 'you have successfully delete the selected products'});
    this.products = remainedProducts;

    this.dismissDeleteProductsModal();
  }


}
