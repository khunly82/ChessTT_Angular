import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'li[app-menu-link]',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuLinkComponent implements OnInit {

  @Input()
  item!: any;

  constructor(
    private readonly _cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  toggle(item: MenuItem) {
    if(item.children){
      item.open = !item.open;
      this._cd.detectChanges();
    }
  }

}
