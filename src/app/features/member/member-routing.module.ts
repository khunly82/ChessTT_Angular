import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSubmittedGuard } from 'src/app/core/guards/form-submitted.guard';
import { IsAdminGuard } from 'src/app/core/guards/is-admin.guard';
import { IsLoggedGuard } from 'src/app/core/guards/is-logged.guard';
import { MemberComponent } from './member.component';
import { AddComponent } from './pages/add/add.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [{ path: '', component: MemberComponent, children: [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [ IsLoggedGuard ] },
  { path: 'add', component: AddComponent, canActivate: [ IsLoggedGuard, IsAdminGuard ], canDeactivate: [ FormSubmittedGuard ] },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
