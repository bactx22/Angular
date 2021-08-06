import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategoryComponent } from './category/category.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductAddComponent,
    HomeComponent,
    ProductEditComponent,
    NotFoundComponent,
    NavComponent,
    SlidebarComponent,
    AdminComponent,
    DashboardComponent,
    ProductPageComponent,
    CategoryComponent,
    EditcategoryComponent,
    AddcategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
