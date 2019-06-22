import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { ContainerConfigGroup } from '../../models/container-config-group';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-builder-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnDestroy {

  @Input() imageName: string;
  @Input() logoUrl: string;
  @Input() tag: string;

  @Input() config: ContainerConfigGroup[];

  @Output() goBack = new EventEmitter();

  private subscription: Subscription;

  public pullRequestUrl: string;

  constructor(private apiService: ApiService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleGoBack() {
    this.goBack.emit();
  }

  createPullRequest() {
    const container = {image: this.imageName, tag: this.tag};
    const form = {name: 'Name', logo: 'Logo', config: this.config};

    this.pullRequestUrl = 'http://github.com';

    this.subscription = this.apiService.post('builder/submit', {container, form}).subscribe((response) => {
      this.pullRequestUrl = response.url;
    });
  }
}
