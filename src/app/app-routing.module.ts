import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthUserGuard } from './guards/auth.user.guard';
import { HomeComponent } from './components/pages/home/home.component';
import { FinanceComponent } from './components/pages/finance/finance.component';
import { ProductComponent } from './components/pages/product/product.component';
import { BranchComponent } from './components/pages/branch/branch.component';
import { VendorComponent } from './components/pages/vendor/vendor.component';
import { ShippingComponent } from './components/pages/shipping/shipping.component';
import { ShareholderComponent } from './components/pages/shareholder/shareholder.component';
import { DigitalanalyticComponent } from './components/pages/digitalanalytic/digitalanalytic.component';
import { LoyaltyComponent } from './components/pages/loyalty/loyalty.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ChangepasswordComponent } from './components/pages/changepassword/changepassword.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthUserGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthUserGuard]},
  { path: 'password/change', component: ChangepasswordComponent, canActivate: [AuthUserGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthUserGuard]},
  { path: 'finance', component: FinanceComponent, canActivate: [AuthUserGuard]},
  { path: 'products', component: ProductComponent, canActivate: [AuthUserGuard]},
  { path: 'branches', component: BranchComponent, canActivate: [AuthUserGuard]},
  { path: 'vendors', component: VendorComponent, canActivate: [AuthUserGuard]},
  { path: 'shipping', component: ShippingComponent, canActivate: [AuthUserGuard]},
  { path: 'shareholders', component: ShareholderComponent, canActivate: [AuthUserGuard]},
  { path: 'digital-analytics', component: DigitalanalyticComponent, canActivate: [AuthUserGuard]},
  { path: 'loyalty', component: LoyaltyComponent, canActivate: [AuthUserGuard]},
  { path: '**', redirectTo: 'home', canActivate: [AuthUserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
