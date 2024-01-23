import { Component, ViewChild,OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = "titile of parent component";
  // parray=[10,20,30,40,50];
  // pdata:any;
  // @ViewChild(HeaderComponent) header: any;
  // pdata: any;
  // pdata1: any;
  // demo() {
  //   this.pdata = this.header.data;
  // }
  // demo1() {
  //   this.pdata = this.header.sendData();
  // }
stream:any;
  getData() {
    let data = new Observable(
      observer => {
      observer.next(1);
      // observer.next(2);
      // observer.next(3);
      // observer.error('some error occured');
      setTimeout(()=> observer.next(2),2000);
      setTimeout(()=> observer.next(3),3000);
      setTimeout(()=> observer.next(4),4000);
      setTimeout(()=> observer.next(5),5000);
      setTimeout(()=> observer.error("some error..."),5000);
      setTimeout(() => observer.complete(), 4000);

    }
    )
    data.subscribe(
      receivedData=> this.stream=receivedData,
      receivedError=>this.stream= receivedError
    )
  }
  ngOnInit(): void {}
}
