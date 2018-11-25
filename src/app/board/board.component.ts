import { Component, OnInit } from '@angular/core';
import { PiecesService } from '../services/pieces.service';
import { SortedPiece } from '../services/sorted-piece';
import { PieceMovementInfo } from '../services/piece-movement-info';
import { SocketService } from '../services/socket.service';

@Component({
	selector: 'chess-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	public blocks = [];

	public letters = [];

	public piece;

	public sortedPieces;

	public pieceToMove;

	private obs;

	public socketData = [];

	constructor(
		private piecesService: PiecesService,
		private sortedPiece: SortedPiece,
		private pieceMovementInfo: PieceMovementInfo,
		private socketService: SocketService
	) { }

	ngOnInit() {
		this.blocks = [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7
		];
		this.letters = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H'
		];

		this.piecesService.piece.subscribe(message => this.piece = message);
		this.sortedPiece.pieces.subscribe(message => this.sortedPieces = message);
		this.pieceMovementInfo.data.subscribe(message => this.pieceToMove = message);
		this.socketService.connect();
		this.socketService.movePieceInfo().subscribe(data => {
			this.socketData.push(data);
		});
		 // mwlDraggable mwlDroppable
	}
}
