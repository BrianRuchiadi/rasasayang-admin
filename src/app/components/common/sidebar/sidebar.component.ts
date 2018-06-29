import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationSliderService } from '../../../services/utilities/navigation-slider.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./../../../styles/common/_sidebar.scss']
})
export class SidebarComponent implements OnInit {
  elementSidebar: any;
  elementDashboard: any;
  elementFinance: any;
  elementProducts: any;
  elementBranches: any;
  elementVendors: any;
  elementShipping: any;
  elementShareholders: any;
  elementDigitalAnalytics: any;
  elementLoyalty: any;

  constructor(
    private location: Location,
    private navigationSliderService: NavigationSliderService
  ) { }

  ngOnInit() {
    this.initElementSelector();
    this.initSelectedListState();
    this.observeBurgerState();
  }

  observeBurgerState() {
    this.navigationSliderService.slideStateObservable.subscribe(
      (state) => {
        if (!state) {
          this.elementSidebar.style.display = 'none';
          return;
        }

        this.elementSidebar.style.display = 'inline-block';
      }
    );
  }

  initSelectedListState() {
    switch (this.location.path()) {
      case '/home':
        this.elementDashboard.style.borderRight = '5px solid #f6a821';
        break;
      case '/finance':
        this.elementFinance.style.borderRight = '5px solid #f6a821';
        break;
      case '/products':
        this.elementProducts.style.borderRight = '5px solid #f6a821';
        break;
      case '/branches':
        this.elementBranches.style.borderRight = '5px solid #f6a821';
        break;
      case '/vendors':
        this.elementVendors.style.borderRight = '5px solid #f6a821';
        break;
      case '/shipping':
        this.elementShipping.style.borderRight = '5px solid #f6a821';
        break;
      case '/shareholders':
        this.elementShareholders.style.borderRight = '5px solid #f6a821';
        break;
      case '/digital-analytics':
        this.elementDigitalAnalytics.style.borderRight = '5px solid #f6a821';
        break;
      case '/loyalty':
        this.elementLoyalty.style.borderRight = '5px solid #f6a821';
        break;
    }
  }

  initElementSelector() {
    this.elementSidebar = document.getElementById('sidebar');
    this.elementDashboard = document.getElementById('dashboard');
    this.elementFinance = document.getElementById('finance');
    this.elementProducts = document.getElementById('products');
    this.elementBranches = document.getElementById('branches');
    this.elementVendors = document.getElementById('vendors');
    this.elementShipping = document.getElementById('shipping');
    this.elementShareholders = document.getElementById('shareholders');
    this.elementDigitalAnalytics = document.getElementById('digital-analytics');
    this.elementLoyalty = document.getElementById('loyalty');
  }

}
