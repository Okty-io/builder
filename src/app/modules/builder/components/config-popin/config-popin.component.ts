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
      type: new FormControl('')
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
      {label: 'File', value: 'files'}
    ];

    this.typeOptions = [
      {label: 'Input', value: 'input'},
      {label: 'Checkbox', value: 'checkbox'},
      {label: 'Select single', value: 'select-single'},
      {label: 'Select multiple', value: 'select-multiple'},
      {label: 'Select container', value: 'select-container'},
      {label: 'Hidden', value: 'hidden'}
    ];
  }

  handleClose(): void {
    this.onClose.emit();
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    console.log(this.formGroup.value);

    this.onSubmit.emit(this.formGroup.value);
  }

  get labelControl(): AbstractControl {
    return this.formGroup.get('label');
  }

  get destinationControl(): AbstractControl {
    return this.formGroup.get('destination');
  }

  get typeControl(): AbstractControl {
    return this.formGroup.get('type');
  }
}
