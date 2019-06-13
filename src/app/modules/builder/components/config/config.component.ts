import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../../core/services/api.service';

@Component({
  selector: 'app-builder-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  @Input() imageName: string;
  public tags = null;
  public tagSearch: string = null;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get(`registry/tag?query=${encodeURIComponent(this.imageName)}`).toPromise().then(res => {
      this.tags = JSON.parse(res).results;
      console.log(this.tags.length);
    });
  }

  public searchTag(): void {
    Object.getOwnPropertyNames(this.tags).map(key => {
      if (this.tags[key].name === this.tagSearch) {
        // console.log(this.tags[key]);
      }
    });
  }
}
