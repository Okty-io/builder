import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContainerConfigField } from '../../../../models/container-config-field';

@Component({
  selector: 'app-builder-config-popin-destination-docker-compose',
  templateUrl: './docker-compose.component.html',
  styleUrls: ['./docker-compose.component.scss']
})
export class DockerComposeComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: ContainerConfigField;

  public hiddenControl: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.form.addControl('base', new FormControl(this.field ? this.field.base : ''));
    this.form.addControl('value', new FormControl(this.field ? this.field.value : ''));
    this.form.addControl('type', new FormControl(this.field ? this.field.type : 'input'));

    this.hiddenControl = new FormControl(this.field && this.field.type === 'hidden');
  }

  public checkValue() {
    this.form.get('type').setValue(this.hiddenControl.value ? 'hidden' : 'input');
  }
}
