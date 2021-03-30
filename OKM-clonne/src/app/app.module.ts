import { FilesModule } from './shared/files/files.module';
import { NgxModule } from './shared/ngx/ngx.module';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { OrderComponent } from './components/order/order.component';
import { ProdectListComponent } from './components/prodect-list/prodect-list.component';
import { ProdectDetailsComponent } from './components/prodect-details/prodect-details.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { AlertComponent } from './shared/alert/alert.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    ContacteComponent,
    OrderComponent,
    ProdectListComponent,
    ProdectDetailsComponent,
    ProductFilterPipe,
    AlertComponent,
    ApplicationErrorComponent,
    ResourceNotFoundComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
    NgxModule,
    FormsModule,
    ReactiveFormsModule,
    FilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
