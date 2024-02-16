import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuButtonComponent,
    MenuLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ]
})
export class LayoutModule { }
