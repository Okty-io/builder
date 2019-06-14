import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';

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

  constructor() {
  }

  ngOnInit() {
    this.isPopinActive = false;

    this.groups = [];
    this.groups.push({
      id: 'group_1', label: 'Général', fields: [
        {id: 'name', label: 'Container ID', type: 'input', destination: 'id', value: ''}
      ]
    });
  }

  public openPopIn(group: ContainerConfigGroup): void {
    this.isPopinActive = true;
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

  addField(field: Event): void {
    console.log(field);
  }
}
