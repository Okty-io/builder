import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-builder-config-popin',
  templateUrl: './config-popin.component.html',
  styleUrls: ['./config-popin.component.scss']
})
export class ConfigPopinComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  public faExit;
  public formGroup: FormGroup;

  public destinationOptions: Array<{ value: string, label: string }>;
  public typeOptions: Array<{ value: string, label: string }>;

  constructor() {
  }

  ngOnInit() {
    this.faExit = faTimes;

    this.initOptions();

    this.formGroup = new FormGroup({
      label: new FormControl(''),
      destination: new FormControl(''),
      type: new FormControl(''),
      custom: new FormGroup({})
    });
  }

  private initOptions(): void {
    this.destinationOptions = [
      {label: 'Version', value: 'version'},
      {label: 'Docker Compose', value: 'compose'},
      {label: 'Volumes', value: 'volumes'},
      {label: 'Ports', value: 'ports'},
      {label: 'Environments', value: 'environments'},
    ];
  }

  handleClose(): void {
    this.onClose.emit();
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const config = Object.assign({}, this.formGroup.value, this.formGroup.get('custom').value);
    delete config.custom;

    config.id = this.getIdFromLabel();

    this.onSubmit.emit(config);
  }

  private getIdFromLabel(): string {
    return this.labelControl.value; // TODO
  }

  get labelControl(): AbstractControl {
    return this.formGroup.get('label');
  }

  get destinationControl(): AbstractControl {
    return this.formGroup.get('destination');
  }

  get customGroup(): AbstractControl {
    return this.formGroup.get('custom');
  }
}
