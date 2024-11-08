import { Component } from '@angular/core';

@Component({
    selector: 'product-card',
    standalone: true,
    imports: [],
    template: `
        <div class="card">
            <div class="card__header">Card Header</div>
        </div>
    `,
    styleUrl: './product-card.component.scss',
})
export default class ProductCardComponent {}
