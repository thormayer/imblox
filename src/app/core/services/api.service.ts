import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly rootUrl;

  constructor(private httpClient: HttpClient) { 
    this.rootUrl = 'http://localhost:3001/';    
  }

  get(uri){
    return this.httpClient.get(`${this.rootUrl}${uri}`);
  }

  post(uri, payload) {
    return this.httpClient.post(`${this.rootUrl}${uri}`, payload, { responseType: 'text' });
  }

  patch(uri, payload) {
    return this.httpClient.patch(`${this.rootUrl}${uri}`, payload);
  }

  delete(uri, id){
    return this.httpClient.delete(`${this.rootUrl}${uri}/${id}`, { responseType: 'text' });
  }

}
