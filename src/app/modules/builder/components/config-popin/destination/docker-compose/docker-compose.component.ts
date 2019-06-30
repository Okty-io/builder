import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContainerConfigField } from '../../../../models/container-config-field';
import { DockerComposeValidator } from '../../../../validators/docker-compose.validator';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
    selector: 'app-builder-config-popin-destination-docker-compose',
    templateUrl: './docker-compose.component.html',
    styleUrls: ['./docker-compose.component.scss']
})
export class DockerComposeComponent implements OnInit {

    @Input() form: FormGroup;
    @Input() field: ContainerConfigField;

    public hiddenControl: FormControl;
    public faCheck;

    public baseOptions;

    ngOnInit() {
        this.initBaseOptions();

        this.addBaseField();
        this.addValueField();
        this.addHiddenField();

        this.addStaticFields();
        this.faCheck = faCheck;
    }

    private initBaseOptions(): void {
        this.baseOptions = [
            {value: 'command', label: 'command'},
            {value: 'restart', label: 'restart'},
            {value: 'user', label: 'user'},
            {value: 'working_dir', label: 'working_dir'},
        ];
    }

    private addBaseField(): void {
        const validators = [];
        validators.push(Validators.required);
        validators.push(DockerComposeValidator.baseAllowed);

        this.form.addControl('base', new FormControl(this.field ? this.field.base : '', validators));
    }

    private addValueField(): void {
        const validators = [];
        validators.push(Validators.required);

        this.form.addControl('value', new FormControl(this.field ? this.field.value : '', validators));
    }

    private addHiddenField(): void {
        this.hiddenControl = new FormControl(this.field && this.field.type === 'hidden');
    }

    private addStaticFields(): void {
        this.form.addControl('type', new FormControl('input'));
    }

    public checkValue() {
        this.form.get('type').setValue(this.hiddenControl.value ? 'hidden' : 'input');
    }

    get baseControl() {
        return this.form.get('base') as FormControl;
    }

    get valueControl() {
        return this.form.get('value') as FormControl;
    }
}
