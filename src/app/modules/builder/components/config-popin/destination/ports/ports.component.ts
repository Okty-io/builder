import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContainerConfigField } from '../../../../models/container-config-field';

@Component({
  selector: 'app-builder-config-popin-destination-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.scss']
})
export class PortsComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: ContainerConfigField;

  ngOnInit() {
    this.form.addControl('base', new FormControl(this.field ? this.field.base : ''));
    this.form.addControl('value', new FormControl(this.field ? this.field.value : ''));
    this.form.addControl('type', new FormControl('input'));
  }

}
