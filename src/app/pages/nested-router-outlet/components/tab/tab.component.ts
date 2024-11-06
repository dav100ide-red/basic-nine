import { Component, Input } from '@angular/core';

@Component({
    selector: 'tab',
    standalone: true,
    imports: [],
    templateUrl: './tab.component.html',
    styleUrl: './tab.component.scss',
})
export class TabComponent {
    @Input({ required: true }) id!: string;
}
