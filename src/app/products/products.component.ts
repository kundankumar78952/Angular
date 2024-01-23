import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:any;

  constructor( private http:HttpClient) { }
  getData(){
    this.http.get('https://fakestoreapi.com/products').subscribe(
    (receivedData) => {
      console.log(this.data=receivedData);
    }
    )
  }
  ngOnInit(): void {
  }
}
