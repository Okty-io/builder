import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-builder-popin-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;
  @Input() error: string;

  constructor() {
  }

  ngOnInit() {
  }

  get fieldControl() {
    return this.control;
  }

}
