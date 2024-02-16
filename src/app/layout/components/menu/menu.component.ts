import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PrimeIcons } from 'primeng/api';
import { filter, takeUntil, tap } from 'rxjs';
import { RoleEnum } from 'src/app/core/enums/role.enum';
import { SessionState } from 'src/app/core/states/session.reducer';
import { DestroyedComponent } from 'src/app/shared/components/destroyed.component';
import { MenuItem } from '../../interfaces/menu-item';
import { MenuService } from '../../services/menu.service';


const baseMenu: MenuItem[] = [
  { title: 'Accueil', link: ['home'], icon: PrimeIcons.HOME },
  { title: 'Tournois', link: ['tournament', 'index'], icon: PrimeIcons.LIST },
];

const adminMenu: MenuItem[] = [
  { title: 'Accueil', link: ['home'], icon: PrimeIcons.HOME },
  { title: 'Tournois', icon: PrimeIcons.CALENDAR, children: [
    { title: 'Index', link: ['tournament', 'index'] },
    { title: 'Nouveau', link: ['tournament', 'add'] },
  ] },
  { title: 'Nouveau membre', icon: PrimeIcons.USER_PLUS, link: ['member', 'add'] },
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends DestroyedComponent implements OnInit {

  items!: MenuItem[];
  
  constructor(
    private readonly _store: Store<{sessionState: SessionState}>, 
    private readonly _menuService: MenuService,
    private readonly _router: Router,
  ) { super(); }

  ngOnInit(): void {
    this._router.events.pipe(
      takeUntil(this.destroyed$),
      filter(event => event instanceof NavigationStart),
    ).subscribe(() => {
      if(window.innerWidth > 768)
        return;
      this._menuService.close()
    });

    this._store.select(state => state.sessionState.role).pipe(
      takeUntil(this.destroyed$),
    ).subscribe(role => this.items = role === RoleEnum.ADMIN ? adminMenu : baseMenu)
  }
}
