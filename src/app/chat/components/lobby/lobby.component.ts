import { AddUserComponent } from './../dialogs/add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from './../../services/chat.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SwitchUserComponent } from '../dialogs/switch-user/switch-user.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit, OnDestroy {

  rooms;
  currentUser;
  currentRoom;

  currentUserList = {
    users: []
  };
  roomConversation = {text: []};

  constructor(private chatService: ChatService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getDefaultUser();
    this.getRooms();
    
    this.updateRooms();
    this.getCurrentUser();
    this.getCurrentRoom();
          
  } 

  onRegisterClicked() {
    this.dialog.open(AddUserComponent)
  }
  onSwitchUser() {
    this.dialog.open(SwitchUserComponent);
  }

  onExitRoomClicked(){
    this.chatService.exitRoom(this.currentRoom.id, this.currentUser.id).subscribe(data => {
      console.log('exit', data)
    })
  }

  onJoinRoomClicked(){
    this.chatService.joinRoom(this.currentRoom.id, {
      userId: this.currentUser.id
    }).subscribe(data => console.log('data jon', data))
  }

  isCurrentUserInRoom(){
    let user = this.currentUserList.users.filter(id => id === this.currentUser.id);
    return user.length > 0 ;
  }

  getUsersByRoomId(id){
    this.chatService.getUsersByRoomId(id).subscribe((users: any) => {
      this.currentUserList = users;
    })
  }

  getCurrentUser() {
    this.chatService.currentUser.subscribe(user => this.currentUser = user);
  }

  onMessageSent(event) {
    console.log('eve', event, this.currentRoom)
    
    this.chatService.postMessage(this.currentRoom.id, {
      text: event,
      userId: this.currentUser.id
    }).subscribe(data => {
      console.log('data', data)
    })
  }

  updateRooms() {
    this.chatService.roomList.subscribe(rooms => {
      
      console.log('rroromm', rooms)
      this.rooms = rooms
    })
  }

  getCurrentRoom() {
    var loop;
    this.chatService.currentRoom.subscribe(room => {
      clearInterval(loop)
      this.currentRoom = room;

      
      if(this.currentRoom) {
        loop = setInterval(() => {
          this.getConversation(this.currentRoom.id).toPromise().then((text: any) => {
            this.roomConversation = text;
          })
          
          
        },1000)
        }
      })
  }

  getConversation(id) {
    return this.chatService.getConversationByRoomId(id);
  }

  async getDefaultUser(){
    let users: any = await this.chatService.getAllUsers().toPromise();
    this.chatService.currentUser$.next(users.filter(user => user.id === 0)[0])
  }

  getRooms(){
    this.chatService.getAllRooms().toPromise().then(data => {
      console.log(data)
      this.chatService.roomList$.next(data);
    });
  }

  onRoomSelected(room) {
    this.chatService.currentRoom$.next(room);
    this.getUsersByRoomId(room.id);
  }

  ngOnDestroy(){
    this.chatService.currentUser$.unsubscribe();
    this.chatService.currentRoom$.unsubscribe();
  }


}
