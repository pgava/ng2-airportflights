import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Gate } from '../../../api/GateApi';
import { Flight } from '../../../api/FlightApi';
import { Router } from '@angular/router';

@Component({
    selector: 'airportFlights',
    templateUrl: './airport-flights.component.html'
})
export class AirportFlightsComponent {
    public gates: Gate[];

    onSelect(flight: Flight) {
        this.router.navigate(['/flight', flight.flightId]);
    }

    constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string, private router: Router) {
        debugger;
        http.get(originUrl + '/api/gate/GetAllFlights').subscribe(result => {
            this.gates = result.json() as Gate[];
        });
    }
}

