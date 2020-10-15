import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'add-room-dialog',
  templateUrl: './add-room-dialog.component.html',
  styleUrls: ['./add-room-dialog.component.scss']
})
export class AddRoomDialogComponent implements OnInit {

  
  roomName;
  room_list;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.roomList.subscribe(data => {
      this.room_list = data;
    })

  }

  onOkClicked(){

    this.chatService.addRoom({
      name: this.roomName
    }).subscribe(id => {
      this.chatService.roomList$.next([...this.room_list, {id: id, name: this.roomName}]);
    })


  
    
  }

}
