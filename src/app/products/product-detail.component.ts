import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle: String = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute) { 
    console.log('ProductId: ' + this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://clipart-library.com/images/yTkaAoGAc.png'
    };
  }
}
