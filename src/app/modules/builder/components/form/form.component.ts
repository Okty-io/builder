import { Component, OnInit } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';

@Component({
  selector: 'app-builder-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public groups: Array<ContainerConfigGroup>;


  ngOnInit(): void {
    this.groups = [];

    const group = {
      id: 'test',
      label: 'ok',
      fields: []
    };

    this.groups.push(group);
  }

  // @Input()
  // set container(container: Container) {
  //     this.form = container;
  //     this.formGroup = new FormGroup({});
  //
  //     this.initControls();
  //     this.initData();
  //
  //     this.dataChange.emit(this.formGroup);
  //     this.formGroup.valueChanges.subscribe(() => this.dataChange.emit(this.formGroup));
  // }
  //
  // private initControls(): void {
  //     this.form.config.forEach((group: ContainerConfigGroup) => {
  //         group.fields.forEach((field: ContainerConfigField) => {
  //             const formControl = this.formService.generateControl(field);
  //             const formControlName = group.id + '_' + field.id;
  //
  //             this.formGroup.addControl(formControlName, formControl);
  //         });
  //     });
  // }
}
