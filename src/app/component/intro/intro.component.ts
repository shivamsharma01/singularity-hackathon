import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  title: string = "Guide My Garage";
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    center: true,
    stagePadding: 100,
    autoWidth: false,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    margin: 1000
  }
  
    slides = [
      {id: '1', img: "/assets/img/screen-1.jpg", title:'Singularity Hackathon!', description: 'dummy description 1'},
      {id: '2', img: "/assets/img/screen-2.jpg", title: 'Recycling Matters', description: 'dummy description 2'},
      {id: '3', img: "/assets/img/screen-3.jpg", title: '... and more.', description: 'dummy description 3'},
    ];
}

