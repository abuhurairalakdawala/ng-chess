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
		let places = [];

		// upwards
		for (let i = row-1; i >= 0; i--) {
			let k = col+':'+i;
			let d = false;
			if (!this.sortedPieces[k]) {
				pos.push(k);
			} else {
				let item = this.piece[this.sortedPieces[k]];
				for (let j = 0; j < item.length; j++) {
					if (item[j].column == col && item[j].row == i) {
						if (item[j].color != piece.color) {
							pos.push(k);
							d = true;
							break;
						} else {
							d = true;
							break;
						}
					}
				}
			}
			if (d) {
				break;
			}
		}

		// downwards
		for (let i = row+1; i <= 7; i++) {
			let k = col+':'+i;
			let d = false;
			if (!this.sortedPieces[k]) {
				pos.push(k);
			} else {
				let item = this.piece[this.sortedPieces[k]];
				for (let j = 0; j < item.length; j++) {
					if (item[j].column == col && item[j].row == i) {
						if (item[j].color != piece.color) {
							pos.push(k);
							d = true;
							break;
						} else {
							d = true;
							break;
						}
					}
				}
			}
			if (d) {
				break;
			}
		}

		// leftwards
		for (let i = col-1; i >= 0; i--) {
			let k = i+':'+row;
			let d = false;
			if (!this.sortedPieces[k]) {
				pos.push(k);
			} else {
				let item = this.piece[this.sortedPieces[k]];
				for (let j = 0; j < item.length; j++) {
					if (item[j].column == i && item[j].row == row) {
						if (item[j].color != piece.color) {
							pos.push(k);
							d = true;
							break;
						} else {
							d = true;
							break;
						}
					}
				}
			}
			if (d) {
				break;
			}
		}

		// rightwards
		for (let i = col+1; i <= 7; i++) {
			let k = i+':'+row;
			let d = false;
			if (!this.sortedPieces[k]) {
				pos.push(k);
			} else {
				let item = this.piece[this.sortedPieces[k]];
				for (let j = 0; j < item.length; j++) {
					if (item[j].column == i && item[j].row == row) {
						if (item[j].color != piece.color) {
							pos.push(k);
							d = true;
							break;
						} else {
							d = true;
							break;
						}
					}
				}
			}
			if (d) {
				break;
			}
		}

		return pos;
	}

}
