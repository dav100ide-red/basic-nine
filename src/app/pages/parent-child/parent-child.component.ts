import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
    selector: 'parent-child',
    standalone: true,
    imports: [ParentComponent],
    templateUrl: './parent-child.component.html',
    styleUrl: './parent-child.component.scss',
})
export class ParentChildComponent {}
