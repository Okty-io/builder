import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContainerConfigField } from '../../models/container-config-field';
import Slugify from 'slugify';

@Component({
  selector: 'app-builder-config-popin',
  templateUrl: './config-popin.component.html',
  styleUrls: ['./config-popin.component.scss']
})
export class ConfigPopinComponent implements OnInit {

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  @Input() field: ContainerConfigField;

  public faExit;
  public formGroup: FormGroup;

  public destinationOptions: Array<{ value: string, label: string }>;


  constructor() {
  }

  ngOnInit() {
    this.faExit = faTimes;

    this.initOptions();

    if (!this.field) {
      this.field = {} as ContainerConfigField;
    }

    this.formGroup = new FormGroup({
      label: new FormControl(this.field ? this.field.label : '', Validators.required),
      destination: new FormControl(this.field ? this.field.destination : '', Validators.required),
      type: new FormControl(this.field ? this.field.type : ''),
      custom: new FormGroup({})
    });

  }

  private initOptions(): void {
    this.destinationOptions = [
      {label: 'ID', value: 'id'},
      {label: 'Version', value: 'version'},
      {label: 'Docker Compose', value: 'compose'},
      {label: 'Volumes', value: 'volumes'},
      {label: 'Ports', value: 'ports'},
      {label: 'Environments', value: 'environments'},
    ];
  }

  handleClose(): void {
    this.closeEvent.emit();
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const config = Object.assign({}, this.formGroup.value, this.formGroup.get('custom').value);
    delete config.custom;

    config.id = this.getIdFromLabel();

    this.submitEvent.emit(config);
  }

  onDestinationChange(): void {
    this.formGroup.setControl('custom', new FormGroup({}));
  }

  private getIdFromLabel(): string {
    return Slugify(this.labelControl.value, {remove: /[*+~.()'"!:@]/g});
  }

  get labelControl(): FormControl {
    return this.formGroup.get('label') as FormControl;
  }

  get destinationControl(): AbstractControl {
    return this.formGroup.get('destination');
  }

  get customGroup(): FormGroup {
    return this.formGroup.get('custom') as FormGroup;
  }
}
