import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/fade.animation';

@Component({
  template: `<div [@fadeAnimation]="outlet.isActivated ? outlet.activatedRoute : ''">
    <router-outlet #outlet="outlet"></router-outlet>
  </div>`,
  animations: [fadeAnimation],
})
export class MemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
