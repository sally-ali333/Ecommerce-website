import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddressComponent,
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AddressModule { }
