import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DestroyedComponent } from 'src/app/shared/components/destroyed.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent extends DestroyedComponent implements OnInit {

  isOpen!: boolean;

  constructor(
    private readonly _menuService: MenuService,
    private readonly _cd: ChangeDetectorRef,
  ) { super(); }

  ngOnInit(): void {
    this._menuService.isOpen$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isOpen => {
        this.isOpen = isOpen;
        this._cd.detectChanges();
      });
  }

  onClick() {
    this._menuService.toggle();
  }
}
