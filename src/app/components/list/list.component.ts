import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { User } from '../../user.model';
import { UserService } from '../../user.service';
import { Message } from '../../message.model';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  user: User;
  users: User[];
  messages: Message[];
  messageLike: Message[];
  displayedColumns = ['userId','token','actionsColumn'];

  constructor(private userService: UserService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.fetchMessages()
    }


    likePost(id) {
      this.messageService
      .likePost(id)
      .subscribe((data: Message[]) => {
        this.messageLike = data;
        console.log("LIKED",data);
      });

    }

  fetchUsers() {
    this.userService
    .login("galietti.jeanfrdancois@gmail.com","passrd44")
    .subscribe((data: User) => {
      this.user = data;
      console.log('Data Requested ....');
      sessionStorage.setItem('token',this.user.token);
      console.log('Token Saved');
      console.log(sessionStorage.getItem('token'));
    });
  }

  fetchMessages() {
    this.userService
    .listMessages()
    .subscribe((data: Message[]) => {
      this.messages = data;
      console.log(this.messages);
    });
  }

  //  this.userService.register().subscribe((users) => {
    //    console.log(users);
        //video part 3 need to finish end
        //);


}
