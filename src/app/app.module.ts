import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LaddaModule } from 'angular2-ladda';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './services/api/auth.service';
import { NotificationService } from './services/utilities/notification.service';

import { AuthUserGuard } from './guards/auth.user.guard';
import { RequestInterceptorsProviders } from './middlewares/request/request-interceptors.provider';
import { ErrorHandlerProviders } from './middlewares/error/error.provider';
import { NotificationComponent } from './components/common/notification/notification.component';
import { TopbarComponent } from './components/common/topbar/topbar.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    TopbarComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
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
