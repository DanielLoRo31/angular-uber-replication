import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProductsAction } from 'src/app/models/products/products.redux';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(private store: Store, private service: ProductsService) { }

  ngOnInit(): void {
    console.log('hola')

    this.store.dispatch(new AddProductsAction(this.service.getAllProducts()));

  }

}
