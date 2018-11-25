import { Injectable } from '@angular/core';
import { PieceMoveAbstract } from './piece-move-abstract';
import { SortedPiece } from '../sorted-piece';
import { PiecesService } from '../pieces.service';
import { PieceMovementInfo } from '../piece-movement-info';

@Injectable({
	providedIn: 'root'
})
export class BishopMove extends PieceMoveAbstract {

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

		// upright
		for (let i = 1; i <= 8; i++) {
			if (col+i <= 7 && row-i >= 0) {
				let upRight = (col+i)+':'+(row-i);
				if (this.sortedPieces[upRight]) {
					let item = this.piece[this.sortedPieces[upRight]];
					if (item[0].color != piece.color) {
						pos.push(upRight);
					}
					break;
				} else {
					pos.push(upRight);
				}
			}
		}

		// upleft
		for (let i = 1; i <= 8; i++) {
			if (col-i >= 0 && row-i >= 0) {
				let upLeft = (col-i)+':'+(row-i);
				if (this.sortedPieces[upLeft]) {
					let item = this.piece[this.sortedPieces[upLeft]];
					if (item[0].color != piece.color) {
						pos.push(upLeft);
					}
					break;
				} else {
					pos.push(upLeft);
				}
			}
		}

		//downright
		for (let i = 1; i <= 8; i++) {
			if (col+i <= 7 && row+i <= 7) {
				let downRight = (col+i)+':'+(row+i);
				if (this.sortedPieces[downRight]) {
					let item = this.piece[this.sortedPieces[downRight]];
					if (item[0].color != piece.color) {
						pos.push(downRight);
					}
					break;
				} else {
					pos.push(downRight);
				}
			}
		}

		//downleft
		for (let i = 1; i <= 8; i++) {
			if (col-i >= 0 && row+i <= 7) {
				let downLeft = (col-i)+':'+(row+i);
				if (this.sortedPieces[downLeft]) {
					let item = this.piece[this.sortedPieces[downLeft]];
					if (item[0].color != piece.color) {
						pos.push(downLeft);
					}
					break;
				} else {
					pos.push(downLeft);
				}
			}
		}

		return pos;
	}

}
