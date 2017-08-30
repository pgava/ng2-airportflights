import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Flight } from '../../../api/FlightApi';

@Component({
    selector: 'flight',
    templateUrl: './flight.component.html'
})
export class FlightComponent {
    public flight: Flight;
    public rootUrl: string;

    onSave(flight: Flight) {
        
    }

    getFlight(id: string): Observable<Flight> {
        return this.http.get(this.rootUrl + `/api/flight?id=${id}`)
            .map(response => {
                let res = response.json() as Flight;
                return response.json() as Flight;
            });
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.getFlight(params.get('id')))
            .subscribe((flight: Flight) => this.flight = flight);
    }

    constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string, private router: Router, private route: ActivatedRoute) {
        this.rootUrl = originUrl;
    }
    
}
