import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'data-binding',
        loadComponent: () =>
            import('./pages/data-biding/data-biding.component').then(
                (m) => m.DataBidingComponent
            ),
    },
    {
        path: 'show-hide-list',
        loadComponent: () =>
            import('./pages/show-hide-list/show-hide-list.component').then(
                (m) => m.ShowHideListComponent
            ),
    },
];
