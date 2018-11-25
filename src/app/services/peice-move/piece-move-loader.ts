import { Injectable, Inject } from '@angular/core';
import { PawnMove, RookMove, KnightMove, BishopMove, KingMove } from './index';

@Injectable({
	providedIn: 'root'
})
export class PieceMoveLoader {

	constructor (
		public pawnMove: PawnMove,
		public rookMove: RookMove,
		public knightMove: KnightMove,
		public bishopMove: BishopMove,
		public kingMove:  KingMove
	) {

	}

	load(name) {
		switch (name) {
			case "pawn":
				return this.pawnMove;
				break;

			case "rook":
				return this.rookMove;
				break;

			case "knight":
				return this.knightMove;
				break;

			case "bishop":
				return this.bishopMove;
				break;
			
			case "king":
				return this.kingMove;
				break;
			
			default:
				throw name+" : class not found";
				
				break;
		}
	}
}
