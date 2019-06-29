import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-builder-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  @Input() imageName: string;
  @Input() tag: string;

  @Output() next = new EventEmitter();

  public tags = null;
  public searchedTag = null;

  public loading: boolean;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.loading = true;

    this.api.get(`registry/tag?query=${encodeURIComponent(this.imageName)}`).toPromise().then(res => {
      this.tags = res;
      this.loading = false;

      if (this.tag) {
        this.searchTag();
      }
    });
  }

  public handleNext(value: string): void {
    this.next.emit(value);
  }

  public searchTag(): void {
    if (!this.tags || this.tags.length <= 0) {
      return;
    }

    this.searchedTag = this.tags.filter(val => val.startsWith(this.tag));
  }
}
