import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'child',
    standalone: true,
    imports: [NgFor],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
})
export class ChildComponent {
    @Input({ required: true }) message!: string;
    @Output() childClick: EventEmitter<string | null> = new EventEmitter();

    clickLetter(): void {
        this.childClick.emit();
    }
}
