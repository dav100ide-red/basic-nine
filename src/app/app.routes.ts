import { Routes } from '@angular/router';
import { checkTabIdResolver } from './resolvers/check-tab-id.resolver';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'data-binding',
        pathMatch: 'full',
    },
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
    {
        path: 'parent-child',
        loadComponent: () =>
            import('./pages/parent-child/parent-child.component').then(
                (m) => m.ParentChildComponent
            ),
    },
    {
        path: 'nested-router-outlet',
        loadComponent: () =>
            import(
                './pages/nested-router-outlet/nested-router-outlet.component'
            ).then((m) => m.NestedRouterOutletComponent),
        children: [
            // {
            //     path: '',
            //     redirectTo: 'tab/1',
            //     pathMatch: 'full',
            // },
            {
                path: 'tab/:id',
                loadComponent: () =>
                    import(
                        './pages/nested-router-outlet/components/tab/tab.component'
                    ).then((m) => m.TabComponent),
                resolve: { id: checkTabIdResolver },
            },
        ],
    },
    {
        path: 'pipes',
        loadComponent: () =>
            import('./pages/pipes/pipes.component').then(
                (m) => m.PipesComponent
            ),
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/not-found/not-found.component').then(
                (m) => m.NotFoundComponent
            ),
    },
];
