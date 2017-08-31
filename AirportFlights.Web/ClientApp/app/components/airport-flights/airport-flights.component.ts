import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Gate, AirportFlightsService } from '../../api/airport-flights.service';
import { Flight } from '../../api/flight.service';

@Component({
    selector: 'airportFlights',
    templateUrl: './airport-flights.component.html'
})
export class AirportFlightsComponent {
    public gates: Gate[];

    onSelect(flight: Flight) {
        this.router.navigate(['/flight', flight.flightId]);
    }

    //constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string, private router: Router) {
    //    http.get(originUrl + '/api/gate/GetAllFlights').subscribe(result => {
    //        this.gates = result.json() as Gate[];
    //    });
    //}

    constructor(private router: Router, private airportFlightsService: AirportFlightsService) {
        airportFlightsService.getAllFlights()
            .subscribe((gates: Gate[]) => this.gates = gates);
    }
}

