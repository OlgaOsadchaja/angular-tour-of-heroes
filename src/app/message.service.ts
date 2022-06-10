import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    if (message.includes('fetched')==false) {
      this.messages.push(message);
    }
   //console.log(message);
  }

  clear() {
    this.messages = [];
  }
}