import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-builder-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() next = new EventEmitter();

  public apiSearch: string;
  public resultSearch: Array<{ name: string, star_count: number, pull_count: number }>;
  public customSearch: boolean;
  public imageSent: boolean;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.resultSearch = [];
    this.customSearch = false;
    this.imageSent = false;
  }

  public searchApi() {
    if (!this.apiSearch || this.apiSearch.length <= 0) {
      this.resultSearch = [];
      return;
    }

    this.api.get(`registry/search?query=${encodeURIComponent(this.apiSearch)}`).toPromise()
      .then(res => {
        this.resultSearch = res;

        if (this.apiSearch.split('/').filter(Boolean).length > 2) {
          this.resultSearch = [{name: this.apiSearch, star_count: 0, pull_count: 0}];
        }
      });
  }

  public handleNext(imageName: string): void {
    if (imageName.split('/').length - 1 > 2) {
      return;
    }

    Object.getOwnPropertyNames(this.resultSearch).map(key => {
      if (this.resultSearch[key].name !== imageName) {
        return;
      }

      this.next.emit(this.resultSearch[key].name);
      this.imageSent = true;
    });
  }

  public cancelImage(): void {
    this.next.emit('');
    this.imageSent = false;
  }
}
