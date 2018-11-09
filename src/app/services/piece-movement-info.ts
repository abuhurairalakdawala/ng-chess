import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
	providedIn: 'root'
})
export class PieceMovementInfo {

	private subject = new BehaviorSubject(
		{
			chance:'white',
			column:null,
			row:null,
			nextPositions:null
		}
	);

	public data = this.subject.asObservable();

	store(data) {
		this.subject.next(data);
	}

	update(key, value) {
		this.subject.getValue()[key] = value;
	}
}
