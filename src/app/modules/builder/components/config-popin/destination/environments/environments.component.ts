import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContainerConfigField } from '../../../../models/container-config-field';

@Component({
  selector: 'app-builder-config-popin-destination-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.scss']
})
export class EnvironmentsComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: ContainerConfigField;

  ngOnInit() {
    this.form.addControl('base', new FormControl(this.field ? this.field.base : ''));
    this.form.addControl('value', new FormControl(this.field ? this.field.value : ''));
    this.form.addControl('type', new FormControl('input'));
  }

}
