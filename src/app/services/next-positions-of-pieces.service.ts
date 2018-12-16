import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
	providedIn: 'root'
})
export class NextPositionsOfPiecesService {
	private subject = new BehaviorSubject(
		{
			white: [],
			black: []
		}
	);

	public data = this.subject.asObservable();

	
}
