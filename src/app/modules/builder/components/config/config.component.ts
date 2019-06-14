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

  public groups: Array<ContainerConfigGroup>;
  public isPopinActive: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isPopinActive = false;

    this.groups = [];
    this.groups.push({id: 'test', label: 'ok', fields: []});
  }

  public openPopIn(): void {
    this.isPopinActive = true;
  }


  public handleNext(value: boolean): void {
    this.next.emit(value);
  }
}
