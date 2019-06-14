import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-builder-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  @Input() imageName: string;
  @Input() logoUrl: string;
  @Input() tag: string;

  @Output() next = new EventEmitter();

  public isPopinActive: boolean;

  constructor() { }

  ngOnInit() {
    this.isPopinActive = false;
  }

  public openPopIn(){
    this.isPopinActive = true;
  }



  public handleNext(value: boolean): void {
    this.next.emit(value);
  }
}
