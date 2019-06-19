import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faEraser } from '@fortawesome/free-solid-svg-icons/faEraser';

@Component({
  selector: 'app-builder-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public groupsData: Array<ContainerConfigGroup>;

  public editIcon;
  public deleteIcon;

  public isEditing: boolean;
  public isRemoving: boolean;

  public overlayVisible: boolean;

  @Output() addAction = new EventEmitter();
  @Output() groupsChange = new EventEmitter<ContainerConfigGroup[]>();

  @Input() set groups(data: ContainerConfigGroup[]) {
    this.groupsData = data;
    this.groupsChange.emit(data);

    this.editIcon = faPencilAlt;
    this.deleteIcon = faEraser;

    this.isEditing = false;
    this.isRemoving = false;

    this.overlayVisible = false;
  }

  remove(group: ContainerConfigGroup): void {
    this.groupsData = this.groupsData.filter((element) => element.id !== group.id);
    this.groupsChange.emit(this.groupsData);
  }

  openPopIn(group: ContainerConfigGroup): void {
    this.addAction.emit(group);
  }

  handleEdit(): void {
    this.toggleOverlay();
    this.isEditing = true;
  }

  handleRemove(): void {
    this.toggleOverlay();
    this.isRemoving = true;
  }

  private toggleOverlay(): void {
    this.overlayVisible = !this.overlayVisible;
  }
}
