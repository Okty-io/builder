import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuilderComponent } from './pages/builder/builder.component';
import { IsLoggedIn } from '../../core/guards/isLoggedIn';

const routes: Routes = [
    {
        path: '',
        component: BuilderComponent,
        canActivate: [
            IsLoggedIn
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuilderRoutingModule {
}
