import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomDialogComponent } from '../dialogs/add-room-dialog/add-room-dialog.component';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  @Input() rooms;
  @Output() onRoomSelected = new EventEmitter<any>();
  
  currentRoom = -1;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onRoomClicked(room){
    this.currentRoom = room;
    this.onRoomSelected.emit(room)
    // console.log('room clicked', room)
  }

  onAddRoomClicked() {
    this.dialog.open(AddRoomDialogComponent)
  }

}
