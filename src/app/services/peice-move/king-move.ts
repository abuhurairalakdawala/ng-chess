import { Injectable } from '@angular/core';
import { PieceMoveAbstract } from './piece-move-abstract';
import { SortedPiece } from '../sorted-piece';
import { PiecesService } from '../pieces.service';
import { PieceMovementInfo } from '../piece-movement-info';

@Injectable({
	providedIn: 'root'
})
export class KingMove extends PieceMoveAbstract {

	constructor (
		sortedPiece: SortedPiece,
		piecesService: PiecesService,
		pieceMovementInfo: PieceMovementInfo
	) {
		super(sortedPiece, piecesService, pieceMovementInfo);
	}

	findValidPosition (piece) {
		let pos = [];
		let col = piece.column;
		let row = piece.row;

		if (row - 1 >= 0) {
			let up = col+':'+(row - 1);
			pos.push(up);
		}

		if (row + 1 <= 7) {
			let down = col+':'+(row + 1);
			pos.push(down);
		}

		if (col - 1 >= 0) {
			let left = (col - 1)+':'+row;
			pos.push(left);
		}

		if (col + 1 <= 7) {
			let right = (col + 1)+':'+row;
			pos.push(right);
		}

		if (col - 1 >= 0 && row - 1 >= 0) {
			let upleft = (col - 1)+':'+(row - 1);
			pos.push(upleft);
		}

		if (col + 1 <= 7 && row - 1 >= 0) {
			let upright = (col + 1)+':'+(row - 1);
			pos.push(upright);
		}

		if (col - 1 >= 0 && row + 1 <= 7) {
			let downleft = (col - 1)+':'+(row + 1);
			pos.push(downleft);
		}


		if (col + 1 <= 7 && row + 1 <= 7) {
			let downright = (col + 1)+':'+(row + 1);
			pos.push(downright);
		}

		return this.filterMoves(pos, piece);
	}

}
