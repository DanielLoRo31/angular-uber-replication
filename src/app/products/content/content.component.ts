import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product/product.interface';
import { AddActualProductsAction, ProductsState } from 'src/app/models/products/products.redux';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Select(ProductsState.getProducts) products$: Observable<IProduct[]>

  // product: IProduct = {
  //   image: 'https://d1ralsognjng37.cloudfront.net/0ffebc29-11ca-4ee6-94e8-f3306c72acc2.jpeg',
  //   cost: 20.00,
  //   title: 'Pizza DePrizza',
  //   score: 3.2,
  //   like: true,
  //   category: 'Pizza'
  // }

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new AddActualProductsAction('Pizza'));
  }

}
