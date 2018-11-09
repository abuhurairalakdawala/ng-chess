import { Injectable } from '@angular/core';
import { PieceMoveAbstract } from './piece-move-abstract';
import { SortedPiece } from '../sorted-piece';
import { PiecesService } from '../pieces.service';
import { PieceMovementInfo } from '../piece-movement-info';

@Injectable({
	providedIn: 'root'
})
export class PawnMove extends PieceMoveAbstract {

	protected sortedPieces;

	protected piece;

	constructor (
		sortedPiece: SortedPiece,
		piecesService: PiecesService,
		pieceMovementInfo: PieceMovementInfo
	) {
		super(sortedPiece, piecesService, pieceMovementInfo);
	}

	public findValidPosition(el, piece) {
		let o = [];
		let frontOneStep = '';
		let frontTwoSteps = '';
		let frontLeft = '';
		let frontRight = '';

		if (piece.color == 'black') {
			frontOneStep = piece.column+':'+(piece.row+1);
			frontTwoSteps = piece.column+':'+(piece.row+2);
			frontLeft = (piece.column+1)+':'+(piece.row+1);
			frontRight = (piece.column-1)+':'+(piece.row+1);
		} else {
			frontOneStep = piece.column+':'+(piece.row-1);
			frontTwoSteps = piece.column+':'+(piece.row-2);
			frontLeft = (piece.column+1)+':'+(piece.row-1);
			frontRight = (piece.column-1)+':'+(piece.row-1);
		}

		if (this.sortedPieces[frontLeft]) {
			let item = this.piece[this.sortedPieces[frontLeft]];
			if (item && item.length) {
				for (let j = 0; j < item.length; j++) {
					if (item[j].column == (piece.column+1) && ((item[j].column+':'+item[j].row) == frontLeft)) {
						item = this.piece[this.sortedPieces[frontLeft]][j];
						break;
					}
				}
				if (item.color != piece.color) {
					o.push(frontLeft);
				}
			}
		}

		if (this.sortedPieces[frontRight]) {
			let item = this.piece[this.sortedPieces[frontRight]];
			if (item && item.length) {
				for (let j = 0; j < item.length; j++) {
					if (item[j].column == (piece.column-1) && ((item[j].column+':'+item[j].row) == frontRight)) {
						item = this.piece[this.sortedPieces[frontRight]][j];
						break;
					}
				}
				if (item.color != piece.color) {
					o.push(frontRight);
				}
			}
		}

		if (piece.moved) {
			if (!this.sortedPieces[frontOneStep]) {
				o.push(frontOneStep);
			}
		} else {
			if (!this.sortedPieces[frontOneStep]) {
				o.push(frontOneStep);
				if (!this.sortedPieces[frontTwoSteps]) {
					o.push(frontTwoSteps);
				}
			}
		}
		return o;
	}

}
