import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: String = 'Product List';
  imageWidth: Number = 20;
  imageMargin: Number = 0;
  showImage: Boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [
      {
        'productId': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'http://clipart-library.com/images/ziX4eMLAT.png'
      },
      {
        'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'http://clipart-library.com/images/yTkaAoGAc.png'
      },
      {
        'productId': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2016',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'http://clipart-library.com/images/Bpc54kET9.png'
      },
      {
        'productId': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2016',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'http://clipart-library.com/images/8iGoE8xoT.png'
      },
      {
        'productId': 10,
        'productName': 'Video Game Controller',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2015',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'http://clipart-library.com/images/kcKoryjni.png'
      }
  ];

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In ngOnInit');
  }

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
