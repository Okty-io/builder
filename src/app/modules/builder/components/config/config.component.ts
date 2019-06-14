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

  public currentGroup: string;

  constructor() {
  }

  ngOnInit() {
    this.isPopinActive = false;

    this.groups = [];
    this.groups.push({
      id: 'group_1', label: 'Général', editing: false, fields: [
        {id: 'name', label: 'Container ID', type: 'input', destination: 'id', value: '', base: '', validators: [], source: []}
      ]
    });
  }

  public openPopIn(group: ContainerConfigGroup): void {
    this.isPopinActive = true;
    this.currentGroup = group.id;
  }

  public hidePopIn(): void {
    this.isPopinActive = false;
    this.currentGroup = '';
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

    const index = groups.findIndex((element: ContainerConfigGroup) => element.id === this.currentGroup);

    // TODO
    groups[index].fields.push({
      id: 'name',
      label: 'Container ID',
      type: 'input',
      destination: 'id',
      value: '',
      base: '',
      validators: [],
      source: []
    });

    this.groups = groups;

    this.hidePopIn();
  }
}
