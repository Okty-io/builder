import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

    private readonly baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.api.host;
    }

    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('token');
        if (!token) {
            return new HttpHeaders();
        }

        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }

    public get(endpoint: string): Observable<any> {
        const headers = this.getHeaders();

        return this.http.get(`${this.baseUrl}/${endpoint}`, {headers});
    }

    public post(endpoint: string, data: any): Observable<any> {
        const headers = this.getHeaders();

        return this.http.post(`${this.baseUrl}/${endpoint}`, data, {responseType: 'json', headers});
    }
}
