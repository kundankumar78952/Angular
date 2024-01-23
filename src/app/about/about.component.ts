import { Component, OnInit } from '@angular/core';
import { TestsService } from '../tests.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private t:TestsService) {} //dependency injection
  data = this.t.mobiles;
  ngOnInit(): void {}
  updateData(){
    this.t.mobiles.push("oppo","poco")
  }
}
