import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public product: Product;

  public constructor() {
    this.product = new Product("Kamuolys", 1, 20, 10);
  }
}
