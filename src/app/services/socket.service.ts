import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable({
	providedIn: 'root'
})
export class SocketService {

	private socket;

	connect() {
		if (!this.socket) {
			this.socket = io('http://localhost:3000/');
		}
	}

	movePieceInfo() {
		return Observable.create((observer) => {
			this.socket.on('piece move', function(data){
				observer.next(data);
			});
		});
	}

	emit(message) {
		this.socket.emit('piece move', message);
	}
}
