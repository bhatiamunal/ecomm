import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { CatagComponent } from './pages/catag/catag.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { HeaderComponent } from './default/header/header.component';
import { FooterComponent } from './default/footer/footer.component';
import { ConentComponent } from './default/conent/conent.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { ViewProductComponent } from './pages/admin/view-product/view-product.component';
import { AdminSiteLayoutComponent } from './layout/admin/admin-site-layout/admin-site-layout.component';
import { AdminHeaderComponent } from './default/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './default/admin/admin-footer/admin-footer.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TdcComponent } from './pages/tdc/tdc.component';
import { MyorderComponent } from './pages/myorder/myorder.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { StatusOfOrderComponent } from './pages/status-of-order/status-of-order.component';
import { OrderAdminComponent } from './pages/admin/order-admin/order-admin.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    AppLayoutComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    CatagComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ConentComponent,
    LoginComponent,
    SignupComponent,
    AddProductComponent,
    ViewProductComponent,
    AdminSiteLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AboutusComponent,
    ContactusComponent,
    FaqComponent,
    TdcComponent,
    MyorderComponent,
    MyprofileComponent,
    StatusOfOrderComponent,
    OrderAdminComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
