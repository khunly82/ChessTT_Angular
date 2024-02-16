import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedGuard } from 'src/app/core/guards/is-not-logged.guard';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [{ path: '', component: AuthComponent, children: [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [ IsNotLoggedGuard ] }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
