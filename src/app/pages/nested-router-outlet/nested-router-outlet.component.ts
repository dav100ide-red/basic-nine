import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'nested-router-outlet',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './nested-router-outlet.component.html',
    styleUrl: './nested-router-outlet.component.scss',
})
export class NestedRouterOutletComponent {}
