import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-builder-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  @Input() stepNumber = 1;
  constructor() { }

  ngOnInit() {
  }

}
