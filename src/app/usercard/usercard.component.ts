import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  constructor(private uc:UserService,private route:ActivatedRoute) { }
  userid:any;
  user:any;

  ngOnInit(): void {
    this.userid=this.route.snapshot.paramMap.get('id');
    let n= Number(this.userid);
    this.user= this.uc.users.find(m=>m.id==n);
  }
  

}
