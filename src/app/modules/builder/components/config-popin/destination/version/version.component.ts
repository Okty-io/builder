import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

@Component({
  selector: 'app-builder-config-popin-destination-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  @Input() form: FormGroup;

  public data: string[];
  public faPlus;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form.addControl('type', new FormControl('select-single'));
    this.form.addControl('base', new FormControl('')); // Always empty for version

    this.form.addControl('source', this.formBuilder.array([this.formBuilder.control('latest', Validators.required)])); // Available values
    this.form.addControl('value', new FormControl('latest')); // Default value

    this.faPlus = faPlus;
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
}
