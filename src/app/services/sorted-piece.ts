import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
	providedIn: 'root'
})
export class SortedPiece {

	private data = new BehaviorSubject(
		{
			'4:7': 'wking',
			'3:7': 'wqueen',
			'0:7': 'wrook',
			'5:4': 'wrook',
			'1:7': 'wknight',
			'6:7': 'wknight',
			'2:7': 'wbishop',
			'5:7': 'wbishop',
			'0:6': 'wpawn',
			'1:6': 'wpawn',
			'2:6': 'wpawn',
			'3:6': 'wpawn',
			'4:6': 'wpawn',
			'5:6': 'wpawn',
			'6:6': 'wpawn',
			'7:6': 'wpawn',
			'4:0': 'bking',
			'3:0': 'bqueen',
			'0:0': 'brook',
			'7:0': 'brook',
			'1:0': 'bknight',
			'6:0': 'bknight',
			'2:0': 'bbishop',
			'5:0': 'bbishop',
			'0:1': 'bpawn',
			'1:1': 'bpawn',
			'2:1': 'bpawn',
			'3:1': 'bpawn',
			'4:1': 'bpawn',
			'5:1': 'bpawn',
			'6:1': 'bpawn',
			'7:1': 'bpawn'
		}
	);

	public pieces = this.data.asObservable();

	update (oldkey, newKey, newValue) {
		let old = this.data.getValue();
		delete old[oldkey];
		old[newKey] = newValue;
		this.data.next(old);
	}
}
