import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'profileApplicationClient';

  constructor(private userService: UsersService, private router: Router){
  }

  users: User[] = []
  user: User = {
    id: "0",
    username: "",
    about: "",
    projectId: ""
  };

  ngOnInit(): void {
  }

  getUser(){
    this.userService.getUser(this.user.username)
    .subscribe(
      response => {
          console.log(response);
        }
    );
  }

  addUser(){
    this.userService.addUser(this.user)
    .subscribe(
      response => {
        console.log(response);
      }
    )
  }

  updateUserDetails(){
    this.userService.updateUserDetails("jeffery", this.user)
    .subscribe(
      response =>{
        console.log(response);
      }
    )
  }

  next(){
    this.router.navigate(['/projects'], {state : {data: this.user.projectId}});
  }
}
