import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../../../core/services/api.service';

@Component({
  selector: 'app-builder-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  public tagName: string;
  @Input() imageName: string;
  @Output() next = new EventEmitter();

  public tags = null;
  public tagSearch: string = null;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.tagName = '';
  }

  public handleNext(): void {
    this.next.emit(this.tagName);
    this.api.get(`registry/tag?query=${encodeURIComponent(this.imageName)}`).toPromise().then(res => {
      this.tags = JSON.parse(res).tags;
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
