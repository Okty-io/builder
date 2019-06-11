import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `
        <div class="text">
            <div *ngIf="loading">
                Loading
            </div>
            <div *ngIf="error">
                <span class="error">{{errorMessage}}</span>
            </div>
        </div>
    `,
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

    @Input() loading = true;
    @Input() error = false;
    @Input() errorMessage = 'An error occured while fetching data...';

}
