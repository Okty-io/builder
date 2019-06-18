import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-builder-config-popin-destination-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {

  @Input() form: FormGroup;

  ngOnInit() {
    this.form.addControl('base', new FormControl(''));
    this.form.addControl('value', new FormControl(''));
    this.form.addControl('type', new FormControl('input'));
  }

}
