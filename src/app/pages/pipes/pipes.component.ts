import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgePipe } from '../../pipes/age.pipe';

@Component({
    selector: 'pipes',
    standalone: true,
    imports: [CommonModule, AgePipe],
    templateUrl: './pipes.component.html',
    styleUrl: './pipes.component.scss',
})
export class PipesComponent {
    user = {
        name: 'Jane Doe',
        dob: new Date(1990, 11, 20), // June 20, 1990
        email: 'janedoe@example.com',
        balance: 5000.75,
    };
}
