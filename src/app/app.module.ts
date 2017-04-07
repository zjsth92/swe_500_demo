import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import { PackageDetailComponent } from './components/package-detail/package-detail.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/guard.service';
import { AuthenService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PackageListComponent,
    PackageDetailComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  
  providers: [
    AuthGuard, {
    provide: "auth",
    useClass: AuthenService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
