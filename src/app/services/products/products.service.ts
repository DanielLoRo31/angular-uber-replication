import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduct[] = [
    {
      id: 0,
      image: 'https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada-450x350.png',
      cost: 20.00,
      title: 'Pepperoni',
      score: 4.5,
      like: true,
      category: 'Pizza'
    },
    {
      id: 1,
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg',
      cost: 10.00,
      title: 'Hawaiana',
      score: 3.2,
      like: false,
      category: 'Pizza'
    },
    {
      id: 2,
      image: 'https://cocina-casera.com/wp-content/uploads/2011/12/pizaa-carne-receta.jpg',
      cost: 15.00,
      title: '3 Carnes',
      score: 4.0,
      like: false,
      category: 'Pizza'
    },
    {
      id: 3,
      image: 'https://i.ytimg.com/vi/K22dfMG-PiA/maxresdefault.jpg',
      cost: 21.00,
      title: 'Queso',
      score: 3.5,
      like: false,
      category: 'Pizza'
    },
    {
      id: 4,
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/03/lo-que-ocurre-en-tu-cerebro-cuando-comes-tacos-al-pastor-0.jpg',
      cost: 10.00,
      title: 'Pastor',
      score: 4.9,
      like: true,
      category: 'Tacos'
    },
    {
      id: 5,
      image: 'https://nortesantander.co/wp-content/uploads/2020/07/5f111cac2ece1.jpeg',
      cost: 10.00,
      title: 'Chorizo',
      score: 4.9,
      like: true,
      category: 'Tacos'
    },
    {
      id: 6,
      image: 'https://pbs.twimg.com/media/BacLjPgCAAEHebI.jpg',
      cost: 10.00,
      title: 'Bisteck',
      score: 4.9,
      like: true,
      category: 'Tacos'
    },
    {
      id: 7,
      image: 'https://cocina-casera.com/wp-content/uploads/2012/12/espaguetis-bolonesa.jpg',
      cost: 100.00,
      title: 'Espagueti',
      score: 4.4,
      like: false,
      category: 'Pasta'
    },
    {
      id: 8,
      image: 'https://www.superama.com.mx/views/micrositio/recetas/images/parrillas/ribeyeconsalsadecerveza/Web_fotoreceta.jpg',
      cost: 150.00,
      title: 'Rib Eye',
      score: 5.0,
      like: true,
      category: 'Carne'
    },
    {
      id: 9,
      image: 'https://craftlog.com/m/i/3864527=s1280=h960',
      cost: 100.00,
      title: 'Arrachera',
      score: 4.7,
      like: true,
      category: 'Carne'
    },
    {
      id: 10,
      image: 'https://cdn.shopify.com/s/files/1/0297/3925/3853/products/new-york-strip-d-20190826-dpv_918x.jpg?v=1588704963',
      cost: 170.00,
      title: 'New York',
      score: 4.8,
      like: false,
      category: 'Carne'
    },
    {
      id: 11,
      image: 'https://previews.123rf.com/images/luizrocha/luizrocha1708/luizrocha170800181/84115597-picanha-a-la-parrilla-corte-brasile%C3%B1o-tradicional-.jpg',
      cost: 200.00,
      title: 'Picaña',
      score: 4.9,
      like: true,
      category: 'Carne'
    },
    {
      id: 12,
      image: 'https://images-gmi-pmc.edge-generalmills.com/d9f23ea2-3331-4696-97e7-eb8f8c544c2c.jpg',
      cost: 190.00,
      title: 'Sirloin',
      score: 4.9,
      like: true,
      category: 'Carne'
    }

  ]

  constructor() { }

  getAllProducts(): IProduct[]{
    return this.products
  }
}
