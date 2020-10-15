import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentUser$ = new BehaviorSubject<any>(null);
  currentUser = this.currentUser$.asObservable();

  currentUserList$ = new BehaviorSubject<any>(null);
  currentUserList = this.currentUserList$.asObservable();

  roomList$ = new BehaviorSubject<any>([]);
  roomList = this.roomList$.asObservable();

  currentRoom$ = new BehaviorSubject<any>(null);
  currentRoom = this.currentRoom$.asObservable();


  constructor(private api: ApiService) { }

  getAllUsers(){
    return this.api.get('users');
  }

  getAllRooms(){
    return this.api.get('rooms');
  }

  getConversationByRoomId(roomId){
    return this.api.get(`rooms/${roomId}/text`);
  }

  postMessage(roomId, payload) {
    return this.api.post(`rooms/${roomId}/text`, payload);
  }

  addRoom(payload){
    return this.api.post(`rooms`, payload);
  }

  getUsersByRoomId(roomId){
    return this.api.get(`rooms/${roomId}/users`);
  }

  addUser(payload) {
    return this.api.post('users', payload);
  }

  exitRoom(roomId, userId) {
    return this.api.delete(`rooms/${roomId}/users`, userId);
  }

  joinRoom(roomId, payload){
    return this.api.post(`rooms/${roomId}/users`, payload);
  }

  
}
