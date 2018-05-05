import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-start-bar',
  templateUrl: './start-bar.component.html',
  styleUrls: ['./start-bar.component.css']
})
export class StartBarComponent implements OnInit {
  startBarOpened: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) onBlur(e: MouseEvent) {
    if (!this.startBarOpened) {
      return;
    }

    const input = this.elementRef.nativeElement.querySelector('.start-button');

    if (input == null) {
      return;
    }

    if (e.target === input || input.contains(<any>e.target)) {
      return;
    }

    const container = this.elementRef.nativeElement.querySelector('.start-menu');
    if (container && container !== e.target && !container.contains(<any>e.target)) {
      this.startBarOpened = false;
    }
  }
}
