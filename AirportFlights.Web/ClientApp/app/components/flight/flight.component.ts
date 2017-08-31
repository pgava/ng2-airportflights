import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Flight, FlightService } from '../../api/flight.service';

@Component({
    selector: 'flight',
    templateUrl: './flight.component.html'
})
export class FlightComponent {
    public flight: Flight;
    public rootUrl: string;

    onSave(flight: Flight) {
        this.flightService.saveFlight(flight)
            .subscribe(data => {
                // TODO
            },
            error => {
                // TODO
           });
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.flightService.getFlight(params.get('id')))
            .subscribe((flight: Flight) => this.flight = flight);
    }

    constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string, private router: Router, private route: ActivatedRoute,
        private flightService: FlightService) {

        this.rootUrl = originUrl;
    }
    
}
