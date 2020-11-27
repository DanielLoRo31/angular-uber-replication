import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddActualProductsAction, ProductsState } from 'src/app/models/products/products.redux';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  expandir: Boolean = true;
  raddio: Boolean[] = [true, false, false, false];
  @Select(ProductsState.getNumberProducts) number$: Observable<Number>

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onClick(number: Number, category: String) {
    for (let i = 0; i < this.raddio.length; i++) {
      this.raddio[i] = false;
    }

    this.raddio[+number] = true;

    this.store.dispatch(new AddActualProductsAction(category));
  }
}
