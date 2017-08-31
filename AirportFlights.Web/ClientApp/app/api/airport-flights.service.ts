import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Flight } from '../api/flight.service';

export interface Gate {
    gateId: number;
    gateName: string;
    flights: Flight[];
}

@Injectable()
export class AirportFlightsService {

    constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string) { }

    getAllFlights(): Observable<Gate[]> {
        return this.http.get(this.originUrl + '/api/gate/GetAllFlights')
            .map(response => {
                return response.json() as Gate[];
            });

    }
}
