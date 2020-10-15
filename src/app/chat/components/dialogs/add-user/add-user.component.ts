import { ChatService } from './../../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userName;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  onOkClicked(){
    this.chatService.addUser({
      name: this.userName
    }).subscribe(data => console.log('data', data))
  }

}
