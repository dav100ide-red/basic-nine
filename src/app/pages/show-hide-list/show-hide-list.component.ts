import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'show-hide-list',
    standalone: true,
    imports: [NgFor, NgIf], //for the sake of the exercise and pratctive of the old way of doing it
    templateUrl: './show-hide-list.component.html',
    styleUrl: './show-hide-list.component.scss',
})
export class ShowHideListComponent {
    public readonly fruits = ['apple', 'watermelon', 'kiwi'];
    showList = true;
}
