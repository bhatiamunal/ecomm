import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { CatagComponent } from './pages/catag/catag.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

/*
Admin 
*/
import { ViewProductComponent } from './pages/admin/view-product/view-product.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { AppLayoutComponent } from './layout/admin/app-layout/app-layout.component';
import { AdminSiteLayoutComponent } from './layout/admin/admin-site-layout/admin-site-layout.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TdcComponent } from './pages/tdc/tdc.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { MyorderComponent } from './pages/myorder/myorder.component';
import { StatusOfOrderComponent } from './pages/status-of-order/status-of-order.component';
import { OrderAdminComponent } from './pages/admin/order-admin/order-admin.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';


const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent   },
      { path: 'Product', component: ProductComponent   },
      { path: 'Products', component: ProductsComponent   },
      { path:'catagories',component:CatagComponent},
      { path:'AboutMe',component:AboutusComponent},
      { path:'contact',component:ContactusComponent},
      { path:'FAQ',component:FaqComponent},
      { path:'TAC',component:TdcComponent},
      { path:'myProfile',component:MyprofileComponent},
      { path:'myOrder',component:MyorderComponent},
      { path:'orderStatus',component:StatusOfOrderComponent},
    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'login', component:LoginComponent    },
      { path: 'signup', component:SignupComponent    },
      
    ]
  },
  {
    path: 'admin',
    component: AppComponent,
    children: [
      { path: 'login', component:AdminloginComponent    },
    
      
   
    ]
  },
  {
    path: 'admin',
    component: AdminSiteLayoutComponent,
    children: [
      { path: 'viewproducts', component:ViewProductComponent    },
      { path: 'addProducts', component:AddProductComponent    },
      { path: 'orderAdmin', component:OrderAdminComponent    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
