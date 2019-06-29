import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-builder-popin-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() control: FormControl;
  @Input() label: string;
  @Input() error: string;

  @Input() options: Array<{ label: string, value: string }>;

  @Output() valueChanged = new EventEmitter();

  onDestinationChange(): void {
    this.valueChanged.emit();
  }

  get fieldControl() {
    return this.control;
  }

}
