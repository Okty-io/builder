import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-builder-config-popin-destination-docker-compose',
  templateUrl: './docker-compose.component.html',
  styleUrls: ['./docker-compose.component.scss']
})
export class DockerComposeComponent implements OnInit {

  @Input() form: FormGroup;

  public hiddenControl: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.form.addControl('base', new FormControl(''));
    this.form.addControl('value', new FormControl(''));
    this.form.addControl('type', new FormControl('input'));

    this.hiddenControl = new FormControl('');
  }

  public checkValue() {
    this.form.get('type').setValue(this.hiddenControl.value ? 'hidden' : 'input');
  }

  get commandControl() {
    return this.form.get('base');
  }
}
