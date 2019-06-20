import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';
import { ContainerConfigField } from '../../models/container-config-field';

@Component({
  selector: 'app-builder-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  @Input() imageName: string;
  @Input() logoUrl: string;
  @Input() tag: string;

  @Output() next = new EventEmitter();

  public isPopinActive: boolean;
  public groups: Array<ContainerConfigGroup>;

  public popinGroup: string;
  public popinField: ContainerConfigField;

  constructor() {
  }

  ngOnInit() {
    this.isPopinActive = false;

    this.groups = [];
    this.groups.push({
      id: 'group_0', label: 'Général', editing: false, fields: [
        {id: 'name', label: 'Container ID', type: 'input', destination: 'id', value: this.imageName, base: '', validators: [], source: []},
      ]
    });
  }

  public openAddPopIn(group: ContainerConfigGroup): void {
    this.isPopinActive = true;
    this.popinGroup = group.id;
  }

  public openEditPopIn(data: { group: ContainerConfigGroup, field: ContainerConfigField }): void {
    this.isPopinActive = true;
    this.popinGroup = data.group.id;
    this.popinField = data.field;
  }

  public hidePopIn(): void {
    this.isPopinActive = false;
    this.popinGroup = '';
    this.popinField = null;

    console.log(this.groups);
  }

  public addGroup(): void {
    const group = {
      id: 'group_' + this.groups.length,
      label: '',
      editing: true,
      fields: []
    };
    this.groups.push(group);
  }

  public handleNext(value: boolean): void {
    this.next.emit(value);
  }

  addField(data: any): void {
    const groups = Object.assign([], this.groups);

    const index = groups.findIndex((element: ContainerConfigGroup) => element.id === this.popinGroup);
    groups[index].fields.push(data);

    this.groups = groups;

    this.hidePopIn();
  }

  removeField(data: { group: ContainerConfigGroup, field: ContainerConfigField }): void {
    const group = this.groups.find((element) => element.id === data.group.id);

    group.fields = group.fields.filter(element => element.id !== data.field.id);
  }
}
