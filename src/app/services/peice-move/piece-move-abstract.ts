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

	kingCheckAfterMove(positions) {
		let r = false;
		positions.forEach((v) => {
			if (this.sortedPieces[v]) {
				if (this.piece[this.sortedPieces[v]][0].name == 'king') {
					r = true;
					return;
				}
			}
		});

		return r;
	}

	identifyKingCheckPositions (loader, itemColor) {
		if (itemColor == 'black') {
			// this.piece['wbishop']
		} else {
			// 
		}
	}

	nextPositions () {
		if (this.pieceToMove.chance == 'white') {
			this.nextPositionsOfWhite();
		} else {
			this.nextPositionsOfBlack();
		}
	}

	nextPositionsOfWhite () {
		// wking
		// wqueen
		// wrook
		// wknight
		// wbishop
		// wpawn
	}

	nextPositionsOfBlack () {
		// bking
		// bqueen
		// brook
		// bknight
		// bbishop
		// bpawn
	}

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

	upwards(piece) {
		let col = piece.column;
		let row = piece.row;
		let pos = [];
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

		return pos;
	}

	downwards(piece) {
		let col = piece.column;
		let row = piece.row;
		let pos = [];
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

		return pos;
	}

	leftwards(piece) {
		let col = piece.column;
		let row = piece.row;
		let pos = [];
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

		return pos;
	}

	rightwards(piece) {
		let col = piece.column;
		let row = piece.row;
		let pos = [];
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

	upleft(piece) {
		let col = piece.column;
		let row = piece.row;
		let pos = [];
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

		return pos;
	}

	upright(piece) {
		let col = piece.column;
		let row = piece.row;
		let pos = [];
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

		return pos;
	}

	downright(piece) {
		let col = piece.column;
		let row = piece.row;
		let pos = [];
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

		return pos;
	}

	downleft(piece) {
		let col = piece.column;
		let row = piece.row;
		let pos = [];
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
