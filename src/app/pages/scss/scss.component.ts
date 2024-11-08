import { Component } from '@angular/core';
import ProductCardComponent from './product-card/product-card.component';

@Component({
    selector: 'scss',
    standalone: true,
    imports: [ProductCardComponent],
    templateUrl: './scss.component.html',
    styleUrl: './scss.component.scss',
})
export default class ScssComponent {}
