import { Injectable } from '@angular/core';
import { PieceMoveAbstract } from './piece-move-abstract';
import { SortedPiece } from '../sorted-piece';
import { PiecesService } from '../pieces.service';
import { PieceMovementInfo } from '../piece-movement-info';

@Injectable({
	providedIn: 'root'
})
export class QueenMove extends PieceMoveAbstract {

	constructor (
		sortedPiece: SortedPiece,
		piecesService: PiecesService,
		pieceMovementInfo: PieceMovementInfo
	) {
		super(sortedPiece, piecesService, pieceMovementInfo);
	}

	findValidPosition (piece) {
		let pos = [];

		return this.upwards(piece).concat(
			this.downwards(piece).concat(
				this.leftwards(piece).concat(
					this.rightwards(piece).concat(
						this.upleft(piece).concat(
							this.upright(piece).concat(
								this.downright(piece).concat(
									this.downleft(piece)
								)
							)
						)
					)
				)
			)
		);
	}

}
