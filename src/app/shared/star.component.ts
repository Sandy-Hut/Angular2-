
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'
//import { EventEmitter } from 'events';
@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number; // this property has to be passes from the parent component therefore decorated as @input. Whenever parent component changes the value of rating property, ngOnChanges runs
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); // this has to be passed from the child component to parent by emitting an event(only way to send data from child to parent component)
    ngOnChanges():void{
        this.starWidth = this.rating*75/5
    }
    onClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} was just clicked!`)
    }
}