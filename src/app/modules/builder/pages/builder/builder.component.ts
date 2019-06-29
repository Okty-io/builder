import { Component, OnInit } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';
import { TitleService } from '../../../../core/services/title.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public currentStep = 'image';

  public image: string;
  public tag: string;
  public logo: string;
  public review: boolean;

  public config: ContainerConfigGroup[];

  constructor(private titleService: TitleService) {
  }

  ngOnInit() {
    this.image = '';
    this.tag = '';
    this.logo = '';

    this.currentStep = 'image';

    this.titleService.set('Choose image');
  }

  public handleImage(image: { label: string, logo: string }): void {
    this.image = image.label;
    this.logo = image.logo;
  }

  public handleTag(tag: string): void {
    this.tag = tag;
    this.displayConfigStep();
  }

  public handleReview(config: ContainerConfigGroup[]): void {
    this.config = config;
    this.dispayReviewStep();
  }

  displayImageStep() {
    this.currentStep = 'image';
  }

  displayConfigStep() {
    this.currentStep = 'config';
  }

  dispayReviewStep() {
    this.currentStep = 'review';
  }
}
