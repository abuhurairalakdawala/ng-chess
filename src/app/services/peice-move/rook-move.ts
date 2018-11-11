import { Injectable } from '@angular/core';
import { PieceMoveAbstract } from './piece-move-abstract';
import { SortedPiece } from '../sorted-piece';
import { PiecesService } from '../pieces.service';
import { PieceMovementInfo } from '../piece-movement-info';

@Injectable({
	providedIn: 'root'
})
export class RookMove extends PieceMoveAbstract {

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

		// console.log(el);

		for (let i = 0; i < row; i++) {
			console.log('row: '+i)
		}

		for (let i = 7; i > row; i--) {
			console.log('row: '+i)
		}

		for (let i = 0; i < col; i++) {
			console.log('col: '+i)
		}

		for (let i = 7; i > col; i--) {
			console.log('col: '+i)
		}

		return pos;
	}
}
