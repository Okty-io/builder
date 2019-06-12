import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-builder-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() next = new EventEmitter();

  private apiSearch: string = null;
  private resultSearch: null;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public searchApi() {
    this.api.get(`registry/search?query=${encodeURIComponent(this.apiSearch)}`).toPromise().then(res => {
      this.resultSearch = res;
    });
  }

  public handleNext(imageName): void {
    if (imageName.split('/').length - 1 < 2) {
      Object.getOwnPropertyNames(this.resultSearch).map(key => {
        if (this.resultSearch[key].name === imageName) {
          this.next.emit(this.resultSearch[key].name);
        }
      });
    }
  }
}
