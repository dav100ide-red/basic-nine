import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    template: `
        <nav>
            @for(link of links; track link){
            <a [routerLink]="link.path">{{ link.label }}</a>
            }
        </nav>
    `,
    styles: `
    nav{
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }
    `,
})
export class HeaderComponent {
    public readonly links = [
        { label: 'Data Binding', path: 'data-binding' },
        { label: 'ngIf and ngFor', path: 'show-hide-list' },
        { label: 'Parent to child & viceversa', path: 'parent-child' },
        { label: 'Nested Router Outlet', path: 'nested-router-outlet' },
        { label: 'Pipes', path: 'pipes' },
    ];
}
