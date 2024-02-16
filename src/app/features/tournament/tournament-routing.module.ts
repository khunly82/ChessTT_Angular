import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSubmittedGuard } from 'src/app/core/guards/form-submitted.guard';
import { IsAdminGuard } from 'src/app/core/guards/is-admin.guard';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditComponent } from './pages/edit/edit.component';
import { IndexComponent } from './pages/index/index.component';
import { TournamentComponent } from './tournament.component';

const routes: Routes = [{ path: '', component: TournamentComponent, children: [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'add', component: AddComponent, canActivate: [ IsAdminGuard ], canDeactivate: [ FormSubmittedGuard ] },
  { path: 'edit/:id', component: EditComponent, canActivate: [ IsAdminGuard ], canDeactivate: [ FormSubmittedGuard ] },
  { path: 'details/:id', component: DetailsComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
