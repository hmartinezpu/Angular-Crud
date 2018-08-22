import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Product } from '../models/product';
@Injectable()
export class ProductService {

  productist: AngularFireList<any>;
  selectedProduct:  Product = new Product();
  constructor(private firebase: AngularFireDatabase ) {}

getProducts(){
  return this.productist= this.firebase.list('products');
}

insertProduct(product: Product){
    this.productist.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
}

updateProduct(product: Product){
  this.productist.update(product.$key,{
    name: product.name,
    category: product.category,
    location: product.location,
    price: product.price
  });


}



      deleteProduct($key: string)
      {
          this.productist.remove($key);
      }
}
