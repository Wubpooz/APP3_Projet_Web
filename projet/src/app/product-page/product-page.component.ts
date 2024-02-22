import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { products } from '../products';
import { HeaderComponent } from '../components/header/header.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = products.find(product => product.id == params['id']);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    console.log('Your product has been added to the cart!');
  }
}