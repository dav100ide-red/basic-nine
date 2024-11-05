import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'data-biding',
    standalone: true,
    imports: [ReactiveFormsModule, JsonPipe],
    templateUrl: './data-biding.component.html',
    styleUrl: './data-biding.component.scss',
})
export class DataBidingComponent {
    private fb = inject(FormBuilder);
    form: FormGroup = this.fb.group({
        name: '',
        age: [0],
    });
}
