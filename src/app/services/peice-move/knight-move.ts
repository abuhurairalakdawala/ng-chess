import { Injectable } from '@angular/core';
import { PieceMoveAbstract } from './piece-move-abstract';
import { SortedPiece } from '../sorted-piece';
import { PiecesService } from '../pieces.service';
import { PieceMovementInfo } from '../piece-movement-info';

@Injectable({
	providedIn: 'root'
})
export class KnightMove extends PieceMoveAbstract {

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

		if ((col-1) >= 0 && (row-2) >= 0) {
			pos.push((col-1)+':'+(row-2));
		}

		if ((col-2) >= 0 && (row-1) >= 0) {
			pos.push((col-2)+':'+(row-1));
		}

		if ((col+1) <= 7 && (row+2) <= 7) {
			pos.push((col+1)+':'+(row+2));
		}

		if (col+2 <= 7 && row+1 <= 7) {
			pos.push((col+2)+':'+(row+1));
		}

		if (col+2 <= 7 && row-1 >= 0) {
			pos.push((col+2)+':'+(row-1));
		}

		if (col+1 <= 7 && row-2 >= 0) {
			pos.push((col+1)+':'+(row-2));
		}

		if (col-1 >= 0 && row+2 <= 7) {
			pos.push((col-1)+':'+(row+2));
		}

		if (col-2 >= 0 && row+1 <= 7) {
			pos.push((col-2)+':'+(row+1));
		}

		return this.filterMoves(pos, piece);
	}
}
