import { Inject } from '@angular/core';
import { SortedPiece } from '../sorted-piece';
import { PiecesService } from '../pieces.service';
import { PieceMovementInfo } from '../piece-movement-info';

export abstract class PieceMoveAbstract {
	protected sortedPieces;

	protected piece;

	protected pieceToMove;;

	constructor (
		private sortedPiece: SortedPiece,
		private piecesService: PiecesService,
		private pieceMovementInfo: PieceMovementInfo
	) {
		this.sortedPiece.pieces.subscribe(message => this.sortedPieces = message);
		this.piecesService.piece.subscribe(message => this.piece = message);
		this.pieceMovementInfo.data.subscribe(message => this.pieceToMove = message);
	}

	abstract findValidPosition(piece);

	movePieceToNewPosition (oldCol, oldRow, key) {
		if (this.sortedPieces[oldCol+':'+oldRow]) {
			let item = this.piece[this.sortedPieces[oldCol+':'+oldRow]];
			for (let i = 0; i < item.length; i++) {
				if (item[i].column == oldCol && item[i].row == oldRow) {
					this.piecesService.updatePiece(
						'killed',
						true,
						this.sortedPieces[oldCol+':'+oldRow],
						i
					);
					break;
				}
			}
		}
		if (this.pieceToMove.chance == 'white') {
			this.pieceMovementInfo.update('chance', 'black');
		} else {
			this.pieceMovementInfo.update('chance', 'white');
		}
		this.piecesService.updatePiece(
			'moved',
			true,
			this.sortedPieces[this.pieceToMove.column+':'+this.pieceToMove.row],
			key
		);
		this.piecesService.updatePiece(
			'column',
			parseInt(oldCol),
			this.sortedPieces[this.pieceToMove.column+':'+this.pieceToMove.row],
			key
		);
		this.piecesService.updatePiece(
			'row',
			parseInt(oldRow),
			this.sortedPieces[this.pieceToMove.column+':'+this.pieceToMove.row],
			key
		);
		this.sortedPiece.update(
			this.pieceToMove.column+':'+this.pieceToMove.row,
			oldCol+':'+oldRow,
			this.sortedPieces[this.pieceToMove.column+':'+this.pieceToMove.row]
		);
	}

	filterMoves(positions, piece) {
		for (let i = positions.length-1; i >= 0; i--) {
			let item = this.piece[this.sortedPieces[positions[i]]];
			if (item) {
				let itemColor = item[0].color;
				if (itemColor == piece.color) {
					positions.splice(i, 1);
				}
			}
		}

		return positions;
	}
}
