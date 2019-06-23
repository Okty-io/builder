import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContainerConfigField } from '../../../../models/container-config-field';

@Component({
  selector: 'app-builder-config-popin-destination-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: ContainerConfigField;

  ngOnInit() {
    this.addValueField();

    this.addStaticFields();
  }

  private addValueField(): void {
    const validators = [];
    validators.push(Validators.required);
    validators.push(Validators.pattern('^[a-zA-Z]+(-)?[a-zA-Z]+$'));

    this.form.addControl('value', new FormControl(this.field ? this.field.value : '', validators));
  }

  private addStaticFields(): void {
    this.form.addControl('type', new FormControl('input'));
  }

  get valueControl() {
    return this.form.get('value');
  }
}
