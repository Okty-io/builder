import { Component, Input } from '@angular/core';
import { ContainerConfigField } from '../../../models/container-config-field';

@Component({
    selector: 'app-hidden',
    templateUrl: './hidden.component.html',
    styleUrls: ['./hidden.component.scss']
})
export class HiddenComponent {

    @Input() field: ContainerConfigField;

}
