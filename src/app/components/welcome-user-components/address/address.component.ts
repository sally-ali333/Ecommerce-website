import { Component, OnInit } from '@angular/core';
import { Address, City } from 'src/app/interface/address';
import { UserAddressService } from 'src/app/services/user-address.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  allAddresses: Address[] = [];
  loading: boolean = false;
  errorMsg: string = '';
  notValidForm: boolean = false;
  successMsg:boolean=false
  cityList: City[] = [];
  showForm:boolean=false

  
  constructor(private _userAddressService: UserAddressService,private _cityService: CityService) {}

  ngOnInit(): void {
    this.getAddress();
    this.getcities(); 
  }

  getAddress() {
    this._userAddressService.getUserAddresses().subscribe({
      next: (res) => {
        console.log(res.data);
        this.allAddresses = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }



  deleteAddress(id: string) {
    this._userAddressService.removeAddress(id).subscribe({
      next: (res) => {
        console.log(res);
        this.allAddresses = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  AddAddressForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    details: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    city: new FormControl('', [Validators.required]),
  });


  addAddress(form:FormGroup){
    if(form.valid){
      this.loading = true;
      this._userAddressService.addAddress(form.value).subscribe({
        next:(res)=>{
          this.errorMsg=''
          console.log(res)
          this.loading = false
          this.successMsg=true;
          this.allAddresses=res.data
        },
        error:(err)=>{
          this.successMsg=false
          console.log(err);
          this.errorMsg = err.error.errors.msg;
          this.loading = false;
        }
      })
    } else{
      this.notValidForm = true;
    }
  }

  getcities() {
    this._cityService.getcities().subscribe({
      next: (res) => {
        console.log(res.results)
        this.cityList = res.results;
      },
      error: (err) => console.log(err),
    });
  }

  add() {
    this.showForm=true
    
  }
}
