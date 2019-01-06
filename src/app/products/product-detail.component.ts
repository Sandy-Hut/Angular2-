import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from './product.service';
import { observable } from 'rxjs';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string = 'product Detail';
  product: IProduct;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); //let id = this.route.snapshot.params.id, "+" is used here to convert string into integer
    this.pageTitle += `${id}`;
    this.getProduct(id);
  }
  getProduct(id:number){
    this.productService.getProduct(id).subscribe(
      (product) => this.product = product,
      (error) => this.errorMessage = <any>error
    )
  }
  onBack():void{
    this.router.navigate(['/products']);
  }
}
