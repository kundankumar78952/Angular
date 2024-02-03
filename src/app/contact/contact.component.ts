import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  display= "none";
  constructor() { }

  ngOnInit(): void {
  }
  openModal(){
    this.display = "block";
  }
  onCloseHandled(){
    this.display = "none";
  }
}
