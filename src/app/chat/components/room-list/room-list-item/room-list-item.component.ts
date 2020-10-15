import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.scss']
})
export class RoomListItemComponent implements OnInit {

  @Input() room;
  @Input() isSelected;
  

  constructor() { }

  ngOnInit(): void {
  }

}
