import { Injectable, Inject } from '@angular/core';
import { PawnMove } from './index';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PieceMoveLoader {

	constructor (public pawnMove: PawnMove) {

	}

	load(name) {
		switch (name) {
			case "pawn":
				return this.pawnMove;
				break;
			
			default:
				throw "class not found";
				
				break;
		}
	}
}
