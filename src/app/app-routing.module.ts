import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/auth-components/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth-components/sign-up/sign-up.component';
import { AuthGuard } from './guard/auth.guard';
import { UserGuard } from './guard/user.guard';
import { ProductDetailsComponent } from './components/featuredproducts/product-details/product-details.component';
import { BrandComponent } from './components/brand/brand.component';
import { HotOffersComponent } from './components/sec-nav-components/hot-offers/hot-offers.component';
import { ProductByBrandComponent } from './components/brand/product-by-brand/product-by-brand.component';
import { ProductsBySubCategoryComponent } from './components/categories/products-by-sub-category/products-by-sub-category.component';
import { ProductsByCategoryComponent } from './components/categories/products-by-category/products-by-category.component';
import { BestsellersComponent } from './components/sec-nav-components/bestsellers/bestsellers.component';
import { NewproductsComponent } from './components/sec-nav-components/newproducts/newproducts.component';
import { ForgotPasswordComponent } from './components/auth-components/forgot-password/forgot-password.component';
import { VerifyResetCodeComponent } from './components/auth-components/verify-reset-code/verify-reset-code.component';
import { ResetPasswordComponent } from './components/auth-components/reset-password/reset-password.component';
import { FeaturedproductsComponent } from './components/featuredproducts/featuredproducts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'hotoffers', component: HotOffersComponent },
  { path: 'bestseller', component: BestsellersComponent },
  { path: 'newproduct', component: NewproductsComponent },
  { path: 'products', component: FeaturedproductsComponent },

  { path: 'productdetails/:id', component: ProductDetailsComponent }, //:parameter is mendatory متغير .. but query param is optional
  { path: 'productsByBrand/:id', component: ProductByBrandComponent },
  { path: 'productsByCategory/:id', component: ProductsByCategoryComponent },
  {
    path: 'productsBySubCategory/:id',
    component: ProductsBySubCategoryComponent,
  },

  { path: 'signup', component: SignUpComponent, canActivate: [UserGuard] },
  { path: 'signin', component: SignInComponent, canActivate: [UserGuard] },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [UserGuard],
  },
  { path: 'Verify-Reset-Code', component: VerifyResetCodeComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  {
    path: 'cart',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/cart/cart.module').then((m) => m.CartModule),
  },

  {
    path: 'allorders',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'wishlist',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        './components/welcome-user-components/wishlist/wishlist.module'
      ).then((m) => m.WishlistModule),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        './components/welcome-user-components/profile/profile.module'
      ).then((m) => m.ProfileModule),
  },
  {
    path: 'address',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        './components/welcome-user-components/address/address.module'
      ).then((m) => m.AddressModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
