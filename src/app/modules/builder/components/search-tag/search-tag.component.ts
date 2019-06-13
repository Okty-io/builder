import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-builder-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  @Input() imageName: string;
  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
