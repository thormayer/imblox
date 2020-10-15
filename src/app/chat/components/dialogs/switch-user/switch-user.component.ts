import { ChatService } from './../../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switch-user',
  templateUrl: './switch-user.component.html',
  styleUrls: ['./switch-user.component.scss']
})
export class SwitchUserComponent implements OnInit {

  currentSelection = -1;
  userList;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getAllUsers().subscribe(users => {
      console.log(users)
      this.userList = users;
    })
  }


  onUserSelected(id) {
    this.currentSelection = id;
  }

  onOkClicked (){
    if(this.currentSelection !== -1) {
      this.chatService.currentUser$.next(this.userList.filter(user => user.id === this.currentSelection)[0]);
    }
  }

}
