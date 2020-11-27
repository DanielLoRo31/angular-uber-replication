import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IProduct } from 'src/app/interfaces/product/product.interface';

export interface IRProduct {
  products: IProduct[];
  actualProducts: IProduct[];
  actualCategory: String;
}

export class AddProductsAction {
  public static type = '[Product] Add Products';
  constructor(public products: IProduct[]) {}
}

export class AddActualProductsAction {
  public static type = '[Product] Add Actual Products';
  constructor(public page: String) {}
}

export class AddSearchFilterAction {
  public static type = '[Product] Add Search Products';
  constructor(public page: String) {}
}

export class UpdateLikeAction {
  public static type = '[Product] Update Like';
  constructor(public id: Number) {}
}

export class ResetSearchFilterAction {
  public static type = '[Product] Reset Search Products';
  constructor() {}
}

@State<IRProduct>({
  name: 'calculadoraState',
  defaults: {
    products: [],
    actualProducts: [],
    actualCategory: 'Pizza',
  },
})
@Injectable()
export class ProductsState {
  constructor() {}

  @Selector()
  static getProducts(state: IRProduct) {
    return state.actualProducts;
  }

  @Selector()
  static getNumberProducts(state: IRProduct) {
    return state.actualProducts.length;
  }

  @Action(AddProductsAction)
  add(ctx: StateContext<IRProduct>, action: AddProductsAction) {
    ctx.patchState({ products: action.products });
  }

  @Action(AddActualProductsAction)
  addActual(ctx: StateContext<IRProduct>, action: AddActualProductsAction) {
    const products = [...ctx.getState().products];

    const filter = products.filter((p) => p.category === action.page);

    ctx.patchState({ actualProducts: filter, actualCategory: action.page });
  }

  @Action(AddSearchFilterAction)
  addSearch(ctx: StateContext<IRProduct>, action: AddSearchFilterAction) {
    const products = [...ctx.getState().products];

    const filter = products.filter(
      (p) =>
        p.category
          .toUpperCase()
          .includes(action.page.toString().toUpperCase()) ||
        p.title.toUpperCase().includes(action.page.toString().toUpperCase())
    );

    ctx.patchState({ actualProducts: filter });
  }

  @Action(ResetSearchFilterAction)
  reset(ctx: StateContext<IRProduct>, action: ResetSearchFilterAction) {
    const products = [...ctx.getState().products];

    const filter = products.filter(
      (p) => p.category === ctx.getState().actualCategory
    );

    ctx.patchState({ actualProducts: filter });
  }

  @Action(UpdateLikeAction)
  updateLike(ctx: StateContext<IRProduct>, action: UpdateLikeAction) {
    const products = [...ctx.getState().products];

    const index = products.findIndex((p) => 
      p.id === action.id
    );

    if (index !== -1) {
      const like = !products[index].like

      products[index] = {...products[index], like};
      const filter = products.filter(
        (p) => p.category === ctx.getState().actualCategory
      );
      ctx.patchState({ actualProducts: filter, products: products });
    }
  }
}
