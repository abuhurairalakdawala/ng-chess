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
					id: 1,
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
					id: 1,
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
					id: 1,
					name: 'rook',
					icon: 'fa-chess-rook',
					column: 0,
					row: 7,
					color: 'white',
					moved: false
				},
				{
					id: 2,
					name: 'rook',
					icon: 'fa-chess-rook',
					column: 5,
					row: 4,
					color: 'white',
					moved: false
				}
			],
			wknight: [
				{
					id: 1,
					name: 'knight',
					icon: 'fa-chess-knight',
					column: 1,
					row: 7,
					color: 'white',
					moved: false
				},
				{
					id: 2,
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
					id: 1,
					name: 'bishop',
					icon: 'fa-chess-bishop',
					column: 2,
					row: 7,
					color: 'white',
					moved: false
				},
				{
					id: 2,
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
					id: 1,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 0,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					id: 2,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 1,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					id: 3,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 2,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					id: 4,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 3,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					id: 5,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 4,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					id: 6,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 5,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					id: 7,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 6,
					row: 6,
					color: 'white',
					moved: false
				},
				{
					id: 8,
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
					id: 1,
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
					id: 1,
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
					id: 1,
					name: 'rook',
					icon: 'fa-chess-rook',
					column: 0,
					row: 0,
					color: 'black',
					moved: false
				},
				{
					id: 2,
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
					id: 1,
					name: 'knight',
					icon: 'fa-chess-knight',
					column: 1,
					row: 0,
					color: 'black',
					moved: false
				},
				{
					id: 2,
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
					id: 1,
					icon: 'fa-chess-bishop',
					column: 2,
					row: 0,
					color: 'black',
					moved: false
				},
				{
					id: 2,
					icon: 'fa-chess-bishop',
					column: 5,
					row: 0,
					color: 'black',
					moved: false
				}
			],
			bpawn: [
				{
					id: 1,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 0,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					id: 2,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 1,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					id: 3,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 2,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					id: 4,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 3,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					id: 5,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 4,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					id: 6,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 5,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					id: 7,
					name: 'pawn',
					icon: 'fa-chess-pawn',
					column: 6,
					row: 1,
					color: 'black',
					moved: false
				},
				{
					id: 8,
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
