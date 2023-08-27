import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/auth-components/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth-components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeaturedproductsComponent } from './components/featuredproducts/featuredproducts.component';
import { ProductitemComponent } from './components/featuredproducts/productitem/productitem.component';
import { ProductDetailsComponent } from './components/featuredproducts/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { HttpInterceptorInterceptor } from './interceptors/http-interceptor.interceptor';
import { LoaderComponent } from './components/loader/loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesComponent } from './components/categories/categories.component';

import { BrandComponent } from './components/brand/brand.component';
import { ProductByBrandComponent } from './components/brand/product-by-brand/product-by-brand.component';
import { HotOffersComponent } from './components/sec-nav-components/hot-offers/hot-offers.component';
import { SecNavbarComponent } from './components/sec-nav-components/sec-navbar/sec-navbar.component';
import { ProductsByCategoryComponent } from './components/categories/products-by-category/products-by-category.component';
import { ProductsBySubCategoryComponent } from './components/categories/products-by-sub-category/products-by-sub-category.component';
import { BestsellersComponent } from './components/sec-nav-components/bestsellers/bestsellers.component';
import { NewproductsComponent } from './components/sec-nav-components/newproducts/newproducts.component';
import { ForgotPasswordComponent } from './components/auth-components/forgot-password/forgot-password.component';
import { VerifyResetCodeComponent } from './components/auth-components/verify-reset-code/verify-reset-code.component';
import { ResetPasswordComponent } from './components/auth-components/reset-password/reset-password.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    SignInComponent,
    SignUpComponent,
    FeaturedproductsComponent,
    ProductitemComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SearchPipe,
    LoaderComponent,
    CategoriesComponent,
    BrandComponent,
    ProductByBrandComponent,
    HotOffersComponent,
    SecNavbarComponent,
    ProductsByCategoryComponent,
    ProductsBySubCategoryComponent,
    BestsellersComponent,
    NewproductsComponent,
    ForgotPasswordComponent,
    VerifyResetCodeComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
