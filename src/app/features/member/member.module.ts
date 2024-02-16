import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { AddComponent } from './pages/add/add.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordDialogComponent } from './components/change-password-dialog/change-password-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MemberComponent,
    AddComponent,
    ProfileComponent,
    ChangePasswordDialogComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
  ]
})
export class MemberModule { }
