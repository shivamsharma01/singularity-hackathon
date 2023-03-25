import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-section',
  templateUrl: './tabs-section.component.html',
  styleUrls: ['./tabs-section.component.css']
})
export class TabsSectionComponent implements OnInit {
  active:number = 1;
  constructor() { }

  ngOnInit() {
  }

}
