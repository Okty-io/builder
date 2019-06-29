import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { HomeComponent } from './pages/home/home.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { BlobsComponent } from './components/blobs/blobs.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
    declarations: [
        HomeComponent,
        PrivacyComponent,
        BlobsComponent,
    ],
    imports: [
        CommonModule,
        CmsRoutingModule,
        HttpClientModule,
        InlineSVGModule.forRoot(),
        SharedModule,
        CoreModule,
    ]
})
export class CmsModule {
}
