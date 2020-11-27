import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IProduct } from 'src/app/interfaces/product/product.interface';
import { UpdateLikeAction } from 'src/app/models/products/products.redux';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: IProduct
  imagen: String

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.imagen = this.product.image
  }

  onClickLike(): void {
    this.store.dispatch(new UpdateLikeAction(this.product.id));
  }

}
