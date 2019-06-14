import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-builder-config-popin',
  templateUrl: './config-popin.component.html',
  styleUrls: ['./config-popin.component.scss']
})
export class ConfigPopinComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  public faExit;

  constructor() {
  }

  ngOnInit() {
    this.faExit = faTimes;
  }

  handleClose(): void {
    this.onClose.emit();
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    this.onSubmit.emit();
  }
}
