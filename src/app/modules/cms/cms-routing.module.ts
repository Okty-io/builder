import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { HomeComponent } from './pages/home/home.component';
import { BuilderComponent } from './pages/builder/builder.component';

const routes: Routes = [
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
      path: 'builder',
      component: BuilderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CmsRoutingModule {
}
