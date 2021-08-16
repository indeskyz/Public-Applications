import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
    address: string
  constructor() { }

    setAddress(address){
            this.address = address
    }

    getAddress(){
            return this.address
    }
}
