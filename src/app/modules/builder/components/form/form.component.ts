import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
  public currentGroup: number;

  public overlayVisible: boolean;

  @Output() addAction = new EventEmitter();
  @Output() editAction = new EventEmitter();
  @Output() removeAction = new EventEmitter();

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

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.isEditing && !this.isRemoving) {
      return;
    }

    const elements = event.composedPath() as HTMLElement[];
    if (elements[0].classList && elements[0].classList.contains('overlay')) {
      this.toggleOverlay();
    }

    const highlightElement = elements.find((element: HTMLElement) => element.classList && element.classList.contains('highlight'));
    if (!highlightElement) {
      return;
    }

    const group = this.groupsData[this.currentGroup];

    const fieldId = highlightElement.getAttribute('data-field');
    const field = group.fields.find((element) => element.id === fieldId);

    if (!field) {
      return;
    }

    if (this.isEditing) {
      this.toggleOverlay();
      this.editAction.emit({group, field});
    }

    if (this.isRemoving) {
      this.toggleOverlay();
      this.removeAction.emit({group, field});
    }
  }

  remove(group: ContainerConfigGroup): void {
    this.groupsData = this.groupsData.filter((element) => element.id !== group.id);
    this.groupsChange.emit(this.groupsData);
  }

  openPopIn(group: ContainerConfigGroup): void {
    this.addAction.emit(group);
  }

  handleEdit(group: number): void {
    if (this.isEditing) {
      return;
    }

    this.toggleOverlay();
    this.isEditing = true;
    this.currentGroup = group;
  }

  handleRemove(group: number): void {
    if (this.isRemoving) {
      return;
    }

    this.toggleOverlay();
    this.isRemoving = true;
    this.currentGroup = group;
  }

  private toggleOverlay(): void {
    if (this.overlayVisible) {
      this.isEditing = false;
      this.isRemoving = false;
      this.currentGroup = null;
    }

    this.overlayVisible = !this.overlayVisible;
  }
}
