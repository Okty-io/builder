import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';

@Component({
  selector: 'app-builder-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public groupsData: Array<ContainerConfigGroup>;

  @Output() addAction = new EventEmitter();
  @Output() groupsChange = new EventEmitter<ContainerConfigGroup[]>();

  @Input() set groups(data: ContainerConfigGroup[]) {
    this.groupsData = data;
    this.groupsChange.emit(data);
  }

  remove(group: ContainerConfigGroup): void {
    this.groupsData = this.groupsData.filter((element) => element.id !== group.id);
    this.groupsChange.emit(this.groupsData);
  }

  openPopIn(group: ContainerConfigGroup): void {
    this.addAction.emit(group);
  }
}
