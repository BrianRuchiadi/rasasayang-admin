import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LaddaModule } from 'angular2-ladda';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './services/api/auth.service';
import { NotificationService } from './services/utilities/notification.service';

import { AuthUserGuard } from './guards/auth.user.guard';
import { RequestInterceptorsProviders } from './middlewares/request/request-interceptors.provider';
import { ErrorHandlerProviders } from './middlewares/error/error.provider';
//
import { NotificationComponent } from './components/common/notification/notification.component';
import { TopbarComponent } from './components/common/topbar/topbar.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FinanceComponent } from './components/pages/finance/finance.component';
import { ProductComponent } from './components/pages/product/product.component';
import { BranchComponent } from './components/pages/branch/branch.component';
import { VendorComponent } from './components/pages/vendor/vendor.component';
import { ShippingComponent } from './components/pages/shipping/shipping.component';
import { ShareholderComponent } from './components/pages/shareholder/shareholder.component';
import { DigitalanalyticComponent } from './components/pages/digitalanalytic/digitalanalytic.component';
import { LoyaltyComponent } from './components/pages/loyalty/loyalty.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    TopbarComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FinanceComponent,
    ProductComponent,
    BranchComponent,
    VendorComponent,
    ShippingComponent,
    ShareholderComponent,
    DigitalanalyticComponent,
    LoyaltyComponent,
    // components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule,
    LaddaModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxDatatableModule
  ],
  providers: [
    AuthService,
    NotificationService,
    AuthUserGuard,
    // services
    RequestInterceptorsProviders,
    ErrorHandlerProviders,
    // middleware
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
