import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-builder-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() next = new EventEmitter();

  public apiSearch: string = null;
  public resultSearch: object = null;
  public customSearch: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public searchApi() {
    this.api.get(`registry/search?query=${encodeURIComponent(this.apiSearch)}`).toPromise().then(res => {
      if (res) {
        this.customSearch = false;
        this.resultSearch = res;
        return;
      }

      this.resultSearch = [{
        name: this.apiSearch,
        star_count: 0,
        pull_count: 0
      }];
      this.customSearch = true;
    });
  }

  public handleNext(imageName): void {
    if (imageName.split('/').length - 1 <= 2) {
      Object.getOwnPropertyNames(this.resultSearch).map(key => {
        if (this.resultSearch[key].name === imageName) {
          this.next.emit(this.resultSearch[key].name);
        }
      });
    }
  }
}
