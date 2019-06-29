import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { OauthComponent } from './pages/oauth/oauth.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CmsModule } from '../cms/cms.module';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent,
        OauthComponent,
        ProfileComponent,
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        CmsModule,
        CoreModule,
        SharedModule
    ]
})
export class UsersModule {
}
