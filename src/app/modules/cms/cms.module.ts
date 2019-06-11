import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { HomeComponent } from './pages/home/home.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        PrivacyComponent
    ],
    imports: [
        CommonModule,
        CmsRoutingModule,
        HttpClientModule,
        InlineSVGModule.forRoot(),
        SharedModule
    ]
})
export class CmsModule {
}
