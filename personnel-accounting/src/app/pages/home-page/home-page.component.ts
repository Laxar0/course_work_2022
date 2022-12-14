import { Component } from '@angular/core';
import { products } from 'src/app/data/products';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  products: IProduct[] = products;
}
