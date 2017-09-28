import { Component } from '@angular/core';
import {ProductService} from './shared/services';

@Component({
  selector: 'ngs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(productService: ProductService) {
    productService.getAll()
      .subscribe(products => console.log(products));
  }
}
