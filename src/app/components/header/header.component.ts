import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    template: `
        @for(link of links; track link){
        <a [routerLink]="link.path">{{ link.label }}</a>
        }
    `,
    styles: ``,
})
export class HeaderComponent {
    public readonly links = [{ label: 'Data Binding', path: 'data-binding' }];
}
