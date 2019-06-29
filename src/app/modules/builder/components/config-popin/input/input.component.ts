import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-builder-popin-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() control: FormControl;
  @Input() label: string;
  @Input() error: string;

  get fieldControl() {
    return this.control;
  }

}
