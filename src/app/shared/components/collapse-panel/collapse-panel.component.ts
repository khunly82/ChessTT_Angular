import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.scss']
})
export class CollapsePanelComponent implements OnInit, AfterViewInit {

  @Input()
  isOpen: boolean = false;

  @ViewChild('body')
  body!: ElementRef;

  height: number = 0;

  constructor() { }

  ngAfterViewInit(): void {
    this.height = this.body.nativeElement.offsetHeight;
    if(!this.isOpen) {
      this.body.nativeElement.style.height = 0;
      this.body.nativeElement.style.opacity = 0;
    }
  }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if(!this.isOpen) {
      this.body.nativeElement.style.height = 0;
      this.body.nativeElement.style.opacity = 0;
    } else {
      this.body.nativeElement.style.height = this.height + 'px';
      this.body.nativeElement.style.opacity = 1;
    }
  }

}
