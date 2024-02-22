import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `/src/assets/img/&{1}.jpg`);

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
   
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  }


