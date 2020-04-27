import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  products:string[]=['Grocery', 'Mobile', 'Electronics' , 'Cloths'];
  product:Product=new Product(100,"Tools",500,"Yes","Grocery","DMart");
  constructor(private productService:ProductService) { }
  addProduct()
  {
    this.productService.sendData(this.product);
  }

  ngOnInit(): void {
  }

}
