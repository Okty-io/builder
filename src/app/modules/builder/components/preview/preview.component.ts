import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ContainerConfigGroup } from '../../models/container-config-group';

@Component({
  selector: 'app-builder-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  preview = '';
  loading = true;
  faSpinner = faSpinner;

  // @Input()
  // set content(data: string) {
  //     if (data === undefined) {
  //         this.preview = '# Configuration is not valid';
  //         this.loading = false;
  //
  //         return;
  //     }
  //
  //     this.loading = !data;
  //     this.preview = YAML.stringify(data, 8);
  // }

  @Input() set config(data: ContainerConfigGroup[]) {
    console.log(data);
  }
}
