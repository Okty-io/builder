import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/authentication/authentication.service';

@Component({
    selector: 'app-builder-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

    @Input() stepNumber = 1;

    username: string;

    constructor(private authentification: AuthenticationService) {
    }

    ngOnInit() {
        this.username = this.authentification.getUsername();
    }

}
