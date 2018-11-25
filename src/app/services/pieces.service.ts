import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
	providedIn: 'root'
})
export class PiecesService {

	private data = new BehaviorSubject({});

	public piece = this.data.asObservable();

	constructor () {
		let arr = {
			wking: [
				{
					name: 'king',
					icon: 'fa-chess-king',
					column: 4,
					row: 7,
					color: 'white',
					moved: false
				}
			],
			wqueen: [
				{
					name: 'queen',
					icon: 'fa-chess-queen',
					column: 3,
					row: 7,
					color: 'white',
					moved: false
				}
			],
			wrook: [
				{
					name: 'rook',
					icon: 'fa-chess-rook',
					column: 0,
					row: 7,
					color: 'white',
					moved: false
				},
				{
					name: 'rook',
					icon: 'fa-chess-rook',
					column: 7,
					row: 7,
					color: 'white',
					moved: false
				}
			],
			wknight: [
				{
					name: 'knight',
					icon: 'fa-chess-knight',
					column: 1,
					row: 7,
					color: 'white',
					moved: false
				},
				{
					name: 'knight',
					icon: 'fa-chess-knight',
					column: 6,
					row: 7,
					color: 'white',
					moved: false
				}
			],
			wbishop: [
				{
					name: 'bishop',
					icon: 'fa-chess-bishop',
					column: 2,
					row: 7,
					color: 'white',
					moved: false
				},
				{
					name: 'bishop',
					icon: 'fa-chess-bishop',
					column: 5,
					row: 7,
					color: 'white',
					moved: false
				}
			],
			wpawn: [
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 0,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 1,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 2,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 3,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 4,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 5,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 6,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 7,
					row: 6,
					color: 'white',
					moved: false
				}
			],
			bking: [
				{
					name: 'king',
					icon: 'fa-chess-king',
					column: 4,
					row: 0,
					color: 'black',
					moved: false
				}
			],
			bqueen: [
				{
					name: 'queen',
					icon: 'fa-chess-queen',
					column: 3,
					row: 0,
					color: 'black',
					moved: false
				}
			],
			brook: [
				{
					name: 'rook',
					icon: 'fa-chess-rook',
					column: 0,
					row: 0,
					color: 'black',
					moved: false
				},
				{
					name: 'rook',
					icon: 'fa-chess-rook',
					column: 7,
					row: 0,
					color: 'black',
					moved: false
				}
			],
			bknight: [
				{
					name: 'knight',
					icon: 'fa-chess-knight',
					column: 1,
					row: 0,
					color: 'black',
					moved: false
				},
				{
					name: 'knight',
					icon: 'fa-chess-knight',
					column: 6,
					row: 0,
					color: 'black',
					moved: false
				}
			],
			bbishop: [
				{
					name: 'bishop',
					icon: 'fa-chess-bishop',
					column: 2,
					row: 0,
					color: 'black',
					moved: false
				},
				{
					name: 'bishop',
					icon: 'fa-chess-bishop',
					column: 5,
					row: 0,
					color: 'black',
					moved: false
				}
			],
			bpawn: [
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 0,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 1,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 2,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 3,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 4,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 5,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 6,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 7,
					row: 1,
					color: 'black',
					moved: false
				}
			]
		};
		this.updateFull(arr)
	}

	updateFull(data)
	{
		this.data.next(data)
	}

	updatePiece(key, value, piece, i) {
		this.data.getValue()[piece][i][key] = value;
	}
}
