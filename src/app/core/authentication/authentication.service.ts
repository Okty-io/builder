import { Injectable } from '@angular/core';
import User from '../../shared/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user: User;
    private subject: BehaviorSubject<User>;
    private jwtHelper: JwtHelperService;

    constructor(private api: ApiService) {
        this.user = null;
        this.subject = new BehaviorSubject(this.user);
        this.jwtHelper = new JwtHelperService();
    }

    public checkloggedIn(): void {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return;
        }

        this.login(token);
    }

    public login(token: string): void {
        sessionStorage.setItem('token', token);

        this.api.get('user').subscribe((user) => {
            this.user = new User(user);
            this.subject.next(this.user);
        });
    }

    public logout(): void {
        this.user = null;
        this.subject.next(this.user);
    }

    public getObservable(): Observable<User> {
        return this.subject.asObservable();
    }

    public hasToken(): boolean {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }

        if (token && this.jwtHelper.isTokenExpired(token)) {
            sessionStorage.removeItem('token');
            return false;
        }

        return true;
    }

    public getUserId(): string {
        if (!this.hasToken()) {
            return '';
        }

        const token = sessionStorage.getItem('token');
        const user = this.jwtHelper.decodeToken(token);

        return user.username;
    }
}
