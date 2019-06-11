import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
    if (this.apiSearch.length < 2) {
      return;
    }

    this.api.get(`registry/search?query=${this.apiSearch}`).toPromise().then(res => {
      this.resultSearch = JSON.parse(res).results;
    });
  }

  public handleNext(imageName): void {
    this.apiSearch = imageName;
    this.next.emit(this.apiSearch);
  }
}
