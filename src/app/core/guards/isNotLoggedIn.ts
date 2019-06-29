import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class IsNotLoggedIn implements CanActivate {

    constructor(private authentication: AuthenticationService, private router: Router) {
    }

    canActivate(): boolean {
        if (!this.authentication.hasToken()) {
            return true;
        }

        this.router.navigate(['/', 'builder']);
        return false;
    }
}
