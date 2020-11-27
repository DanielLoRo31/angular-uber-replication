import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  AddSearchFilterAction,
  ResetSearchFilterAction,
} from 'src/app/models/products/products.redux';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  select: Boolean = false;
  texto: String = null;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  changeContent(): void {
    if (this.texto == null || this.texto == '') {
      this.store.dispatch(new ResetSearchFilterAction());
    } else {
      this.store.dispatch(new AddSearchFilterAction(this.texto));
    }
  }
}
