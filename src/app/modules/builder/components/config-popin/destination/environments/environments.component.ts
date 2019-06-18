import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-builder-config-popin-destination-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.scss']
})
export class EnvironmentsComponent implements OnInit {

  @Input() form: FormGroup;

  ngOnInit() {
    this.form.addControl('base', new FormControl(''));
    this.form.addControl('value', new FormControl(''));
    this.form.addControl('type', new FormControl('input'));
  }

}
