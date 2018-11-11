import { Injectable, Inject } from '@angular/core';
import { PawnMove, RookMove } from './index';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PieceMoveLoader {

	constructor (public pawnMove: PawnMove, public rookMove: RookMove) {

	}

	load(name) {
		switch (name) {
			case "pawn":
				return this.pawnMove;
				break;

			case "rook":
				return this.rookMove;
				break;
			
			default:
				throw "class not found";
				
				break;
		}
	}
}
