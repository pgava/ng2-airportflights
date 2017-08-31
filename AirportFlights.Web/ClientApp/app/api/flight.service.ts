import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

export interface Flight {
    flightId: number;
    gateId: number;
    flightNumber: string;
    description: string;
    arrival: string;
    departure: string;
    isCancel: boolean;
}

export interface Error {
    flightNumber: string;
    description: string;
    arrival: string;
    departure: string;
}

export interface Status {    
    message: string;
    type: string;
}

@Injectable()
export class FlightService {

    constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string) { }

    getFlight(id: string): Observable<Flight> {
        return this.http.get(this.originUrl + `/api/flight?id=${id}`)
            .map(response => {
                return response.json() as Flight;
            });
    }

    saveFlight(flight: Flight) : Observable<Response> {
        let requestUrl = `/api/flight/${flight.flightId}`;
        let body = JSON.stringify(flight);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (flight.flightId === 0) {
            requestUrl = '/api/flight';
            return this.http.post(requestUrl, body, options);
        } else {
            return this.http.put(requestUrl, body, options);
        }
    }
}

