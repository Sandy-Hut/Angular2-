import { Component,OnInit } from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 35;
    showImage: boolean = false;
    filteredProducts: IProduct[];
    constructor(private productService: ProductService){ }
    // "_" is to make the property private 
    _listFilter: string;
    //data binding calls getter when it needs data
    // getter or setter value is bind to model 
    get listFilter():string{
        return this._listFilter
    }
    // data binding calls setter and reset the value when user changes the value 
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    products: IProduct[] = []
    ngOnInit():void{
        this.products = this.productService.getProduct();
        this.filteredProducts = this.products;
    }
    performFilter(filterBy: string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1
        )   
    }
    toggleImage():void{
        this.showImage = !this.showImage;
    }
    onRatingClicked(msg:string):void{
        this.pageTitle = 'Product List: '+msg;
    }
}