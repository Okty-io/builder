import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() imageName: string;
  @Input() logoUrl: string;
  @Input() tag: string;

  constructor() { }

  ngOnInit() {
  }

}
