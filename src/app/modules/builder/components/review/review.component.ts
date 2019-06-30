import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { ContainerConfigGroup } from '../../models/container-config-group';
import { Subscription } from 'rxjs';
import { TitleService } from '../../../../core/services/title.service';
import { AuthenticationService } from '../../../../core/authentication/authentication.service';

@Component({
    selector: 'app-builder-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit, OnDestroy {

    @Input() imageName: string;
    @Input() logoUrl: string;
    @Input() tag: string;

    @Input() config: ContainerConfigGroup[];

    @Output() goBack = new EventEmitter();

    private subscription: Subscription;

    public pullRequestUrl: string;
    public loading: boolean;
    public error: boolean;

    constructor(private apiService: ApiService, private titleService: TitleService, private authentification: AuthenticationService) {
    }

    ngOnInit(): void {
        this.titleService.set('Review');

        this.loading = false;
        this.error = false;
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    handleGoBack() {
        this.goBack.emit();
    }

    createPullRequest() {
        const container = {image: this.imageName, tag: this.tag};
        const form = {name: 'Name', logo: 'Logo', config: this.config};
        const user = {id: this.authentification.getUserId()};

        this.loading = true;

        this.subscription = this.apiService.post('builder/submit', {container, form, user}).subscribe((response) => {
            this.pullRequestUrl = response.url;
            this.loading = false;
        }, () => {
            this.error = true;
            this.loading = false;
        });
    }
}
