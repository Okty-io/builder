import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';

@Component({
  selector: 'app-builder-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public groupsData: Array<ContainerConfigGroup>;

  @Output() groupsChange = new EventEmitter<ContainerConfigGroup[]>();
  @Input() set groups(value) {
    this.groupsData = value;
  }

  ngOnInit(): void {
    console.log(this.groupsData);
  }

  remove(group: ContainerConfigGroup) {
    this.groupsData = this.groupsData.filter((element) => element.id !== group.id);
    this.groupsChange.emit(this.groupsData);
  }
}
