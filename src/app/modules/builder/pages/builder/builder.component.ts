import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  private image: string = null;

  constructor() { }

  ngOnInit() {
  }

  public handleNext(name: string): void {
    this.image = name;
  }
}
