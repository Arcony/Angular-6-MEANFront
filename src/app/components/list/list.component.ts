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
  messageLike: Message;
  displayedColumns = ['userId','token','actionsColumn'];

  constructor(private userService: UserService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.fetchMessages()
    }


   upPost(message) {
     console.log(message);
     if(this.isLiked(message))
     {
       this.messageService
       .dislikePost(message.id)
       .subscribe((data: Message) => {
         this.messageLike = data;
         let indexMessage =  this.messages.findIndex(obj => obj.id === this.messageLike.id);
         let indexUser =   this.messages[indexMessage].Users.findIndex(obj => obj.username === localStorage.getItem('username'));
         if(indexUser > -1)
         {
         this.messages[indexMessage].Users[indexUser].Like.isLike = 0;
         this.messages[indexMessage].likes = this.messages[indexMessage].likes - 1;
         }
       });

     }
     else
     {
      this.messageService
      .likePost(message.id)
      .subscribe((data: Message) => {
        this.messageLike = data;
        console.log(this.messages);
        let indexMessage =  this.messages.findIndex(obj => obj.id === this.messageLike.id);
        let indexUser = this.messages[indexMessage].Users.findIndex(obj => obj.username === localStorage.getItem('username'));
        if(indexUser > -1 )
        {
          console.log(indexUser);
        this.messages[indexMessage].Users[indexUser].Like.isLike = 1;
        this.messages[indexMessage].likes = this.messages[indexMessage].likes + 1;
        }
      });
     }
    }

    fetchMessages() {
    this.userService
    .listMessages()
    .subscribe((data: Message[]) => {
      this.messages = data;
    });
  }

  isLiked(message) {
    var indexUser = message.Users.findIndex(obj => obj.username ,  localStorage.getItem('username'));
    console.log()
    if(indexUser >= 0)
    {
      if(message.Users[indexUser].Like.isLike == 1)
        return true;
    }
    return false;
  }

  //  this.userService.register().subscribe((users) => {
    //    console.log(users);
        //video part 3 need to finish end
        //);


}
