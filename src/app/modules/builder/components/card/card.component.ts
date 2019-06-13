import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-generator-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() element;
}
