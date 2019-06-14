import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-builder-form-group-title',
  templateUrl: './group-title.component.html',
  styleUrls: ['./group-title.component.scss']
})
export class GroupTitleComponent implements OnInit {

  public data;

  @Output() labelChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() set label(value) {
    this.data = value;
  }
  @Input() public editing: boolean;

  public faEdit;
  public faSave;

  ngOnInit() {
    this.faEdit = faEdit;
    this.faSave = faCheck;
  }

  onLabelChange() {
    this.labelChange.emit(this.data);
  }

}
