import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-bar',
  templateUrl: './start-bar.component.html',
  styleUrls: ['./start-bar.component.css']
})
export class StartBarComponent implements OnInit {
  startBarOpened: boolean;

  constructor() { }

  ngOnInit() {
  }

}
