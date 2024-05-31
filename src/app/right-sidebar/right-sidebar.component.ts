import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {

  constructor(profileService:ProfileService) { }

  ngOnInit(): void {
  }
  // changeTheme(){
  //   this.profileService.changeTheme(this.themecode);
  //   }
}
