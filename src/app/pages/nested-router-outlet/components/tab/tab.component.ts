import { Component, Input } from '@angular/core';
import { ALLOWED_TAB_IDS } from '../../../../resolvers/check-tab-id.resolver';

@Component({
    selector: 'tab',
    standalone: true,
    imports: [],
    templateUrl: './tab.component.html',
    styleUrl: './tab.component.scss',
})
export class TabComponent {
    @Input({ required: true }) id: string | null = null;
    public readonly allowedIds = ALLOWED_TAB_IDS;
}
