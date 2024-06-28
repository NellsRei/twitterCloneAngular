import { Component, OnInit } from '@angular/core';
import { AllRoutesService } from '../Services/RouterServices/all-routes.service';
import { CommonModule } from '@angular/common';
import { User } from '../Model/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Posts } from '../Model/posts';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  users!:User[]
  name:string= ''
  username:string= ''
  email:string= ''
  catchphrase:string= ''
  location:string = ''
  posts!:Posts

  constructor(private rou: AllRoutesService) {}

  ngOnInit() {
    // this.rou.getUser().subscribe(user => {
    //   console.log(user)
    // })
    this.rou.getUsers().subscribe(users => {
      // console.log(users)
      this.users = users
    })
    this.rou.getPosts().subscribe(post =>{
      // console.log(post)
      this.posts =post

    })
  }
  onSelectUser(event: Event) {
    const selectedUserId = +(event.target as HTMLSelectElement).value
    // console.log("Hi")
    // console.log(selectedUserId)
    const user = this.users.find(u => u.id === selectedUserId)

    // console.log(user)
    if (user){
      this.name = user.name
      this.username = user.username
      this.email = user.email
      this.catchphrase = user.company.catchPhrase
      this.location = user.address.city
      // console.log(this.username)
    }

  }


}
