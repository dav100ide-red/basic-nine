import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NationalityService {
    private baseUrl = 'https://api.nationalize.io/';
    private http = inject(HttpClient);

    guessNationalityByName(name: string): Observable<NationalizeDTO> {
        console.log(name);
        return this.http.get<NationalizeDTO>(`${this.baseUrl}?name=${name}`);
    }
}

export type NationalizeDTO = {
    count: number;
    name: string;
    country: NationalizeCountry[];
};

export type NationalizeCountry = {
    country_id: string;
    probability: number;
};
