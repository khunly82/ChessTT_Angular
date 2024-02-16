import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { MenuService } from './layout/services/menu.service';
import { fadeAnimation } from './shared/animations/fade.animation';
import { DestroyedComponent } from './shared/components/destroyed.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent extends DestroyedComponent implements OnInit
{
  menuOpen: boolean = true;

  constructor(
    private readonly _menuService: MenuService
  ) { super(); }

  ngOnInit(): void {
    this._menuService.isOpen$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(menuOpen => this.menuOpen = menuOpen);
  }
}
