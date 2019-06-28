import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ContainerConfigField } from '../../../../models/container-config-field';

@Component({
  selector: 'app-builder-config-popin-destination-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: ContainerConfigField;

  public data: string[];
  public faPlus;
  public faTrash;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form.addControl('type', new FormControl('select-single'));
    this.form.addControl('base', new FormControl('')); // Always empty for version

    this.form.addControl('source', this.formBuilder.array(this.getDefaultSourceValues())); // Available values
    this.form.addControl('value', new FormControl(this.field && this.field.value ? this.field.value : 'latest')); // Default value

    this.faPlus = faPlus;
    this.faTrash = faTrash;
    this.data = [];
  }

  initVersion(): AbstractControl {
    return this.formBuilder.control('', Validators.required);
  }

  addVersion(): void {
    const control = this.form.controls.source as FormArray;
    control.push(this.initVersion());
  }

  removeVersion(index: number): void {
    const control = this.form.controls.source as FormArray;
    control.removeAt(index);
  }

  private getDefaultSourceValues(): AbstractControl[] {
    if (!this.field.source) {
      return [this.formBuilder.control('latest', Validators.required)];
    }

    const sources = [];
    this.field.source.forEach((element) => sources.push(this.formBuilder.control(element, Validators.required)));

    return sources;
  }
}
