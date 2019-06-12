import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    @Input() type = 'primary';
    @Input() size = 'medium';
    @Input() icons = '';
    @Input() specials = false;
    @Input() disabled = false;
}
