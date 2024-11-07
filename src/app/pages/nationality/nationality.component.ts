import { Component, inject } from '@angular/core';
import {
    NationalityService,
    NationalizeDTO,
} from '../../services/nationality.service';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'nationality',
    standalone: true,
    imports: [ReactiveFormsModule, AsyncPipe],
    providers: [NationalityService],
    templateUrl: './nationality.component.html',
    styleUrl: './nationality.component.scss',
})
export default class NationalityComponent {
    private fb = inject(FormBuilder);
    private service = inject(NationalityService);
    form: FormGroup = this.fb.group({
        name: ['', Validators.required],
    });
    winner$?: Observable<string>;

    submitName() {
        if (this.form.valid) {
            const { name } = this.form.value;
            this.winner$ = this.service.guessNationalityByName(name).pipe(
                map(({ country }) => {
                    const topCountry = country.reduce((prev, current) =>
                        prev.probability > current.probability ? prev : current
                    );
                    return topCountry.country_id;
                })
            );
        }
    }
}
